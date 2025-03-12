
import { expect } from 'chai';
import * as path from 'path';
import { PactV3, MatchersV3, Verifier } from '@pact-foundation/pact';
import { FindByStatusService } from 'src/services/find-by-status.service';
import { PetDto } from '../src/models/find-by-status.dto';
const { like } = MatchersV3;

describe('PactV3 PetsStore consumer tests', () => {
    let findByStatusService: FindByStatusService;

    const provider = new PactV3({
        consumer: 'Pets-Web-v3',
        provider: 'Pets-API-v3'
    });

    const petExample: PetDto = {
        id: 1001,
        category: {
            id: 1001,
            name: 'dog'
        },
        name: 'freddie',
        photoUrls: ['string'],
        tags: [
            {
                id: 1001,
                name: 'my freddie'
            }
        ],
        status: 'available'
    };

    const EXPECTED_BODY = like(petExample);

    describe('found by status', () => {
        it('returns the requested pet', () => {
            // Arrange
            provider
                .given('pet interaction')
                .uponReceiving('get a pet')
                .withRequest({
                    method: 'GET',
                    path: '/v2/pet/findByStatus?status=available'
                })
                .willRespondWith({
                    status: 200,
                    headers: { 'content-type': 'application/json' },
                    body: EXPECTED_BODY
                });

            return provider.executeTest(async (mockserver) => {
                // Act
                findByStatusService = new FindByStatusService(mockserver.url);
                const response = await findByStatusService.getPetByStatus('1001');

                expect(response.data).to.deep.eq(petExample);
            });
        });
    });
});

describe('PactV3 PetsStore Provider Verification', () => {
    it('validates the expectations of Matching Service', () => {
        return new Verifier({
            providerBaseUrl: 'https://petstore.swagger.io',
            pactUrls: [path.resolve(process.cwd(), './pacts/Pets-Web-v3-Pets-API-v3.json')]
        })
            .verifyProvider();
    });
});
