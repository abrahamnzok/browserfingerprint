exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('table_name').del()
        .then(function () {
            // Inserts seed entries
            return knex('fingerprintdata').insert([
                {
                    key: '4d20e85b8fcf0e410a4193658b2d3f873c44b8c78e5ab4e1b12fd2f460a3b495',
                    fingerprint: [
                        {},
                        {},
                        {},
                    ],
                    timestamp: null,
                    collisions: 3,
                    visits: 10,
                    name: 'ahonacker1',
                },
                {
                    key: 'edf5d94ea2e3832aa98b4ad627f11df046195fe82b4a2a758e4fb306a1743a1d',
                    fingerprint: [
                        {},
                    ],
                    timestamp: null,
                    collisions: 2,
                    visits: 14,
                    name: 'mdadson5',
                },
                {
                    key: '7eff41f940a689cd0650e5bef72607d002b5573798452e7d77a856201cdbfcc3',
                    fingerprint: [
                        {},
                        {},
                    ],
                    timestamp: null,
                    collisions: 8,
                    visits: 16,
                    name: 'rquenell7',
                },
                {
                    key: 'b6b93549e1f88577294610ea6543833b0ca478b41c960e11a61ffa3f21afd766',
                    fingerprint: [
                        {},
                        {},
                        {},
                        {},
                    ],
                    timestamp: null,
                    collisions: 1,
                    visits: 19,
                    name: 'tdareya',
                },
                {
                    key: 'd0a742db4a684608d15d1d68c116d3331cfd485fa21f5f005029988c7e1ac634',
                    fingerprint: [
                        {},
                    ],
                    timestamp: null,
                    collisions: 10,
                    visits: 15,
                    name: 'tbecker6',
                },
                {
                    key: '5f4543741b25d55001483b4cc0498207d6989bc25f4a704e75c5036035dd39f8',
                    fingerprint: [
                        {},
                        {},
                        {},
                    ],
                    timestamp: null,
                    collisions: 11,
                    visits: 9,
                    name: 'fdomanski0',
                },
                {
                    key: 'cf0e14c136961d50f2bdc048e58ef3b17167624405d8299e2bc3442566daee73',
                    fingerprint: [
                        {},
                        {},
                        {},
                    ],
                    timestamp: null,
                    collisions: 13,
                    visits: 11,
                    name: 'pwarby2',
                },
                {
                    key: '7c162df0a020ee2d70c706965665b91bbfaaca1a83f694305e4fad4d4a9c5db3',
                    fingerprint: [
                        {},
                    ],
                    timestamp: null,
                    collisions: 14,
                    visits: 12,
                    name: 'wshoebridge3',
                },
                {
                    key: '44beed9281e4320dbc96653bb1038cd672bf733e5f7aad55b6021442a6d8aec7',
                    fingerprint: [
                        {},
                        {},
                        {},
                        {},
                    ],
                    timestamp: null,
                    collisions: 15,
                    visits: 13,
                    name: 'slackmann4',
                },
                {
                    key: 'df44ac637cb04e632af83dec411f9e6f26dc08f663dab580eaa1357b5ba3cd46',
                    fingerprint: [
                        {},
                        {},
                    ],
                    timestamp: null,
                    collisions: 19,
                    visits: 17,
                    name: 'pturbayne8',
                },
                {
                    key: '74753cf7170e217f5b69c396e2d34b04c73de875e89e07911d1d8d987b27be12',
                    fingerprint: [
                        {},
                        {},
                    ],
                    timestamp: null,
                    collisions: 11,
                    visits: 18,
                    name: 'jwayvill9',
                },
                {
                    key: '676ddd7c5701f0c4bcb6fd73f1971507c0568592407e937f7a282c54aa18b6ca',
                    fingerprint: [
                        {},
                        {},
                        {},
                        {},
                    ],
                    timestamp: null,
                    collisions: 30,
                    visits: 20,
                    name: 'gphidginb',
                },
                {
                    key: '77fae60ad8d42f67ad8494602a1d997163a79bb54dd840762194e16d4b9a92d4',
                    fingerprint: [
                        {},
                        {},
                        {},
                        {},
                    ],
                    timestamp: null,
                    collisions: 12,
                    visits: 21,
                    name: 'dfidellc',
                },
                {
                    key: '1402e01a160a97a99698ba6657b0feeef3d663056e532cbc19fe8e1b37076dd12193a48528b07adaadfe0d0991847f10',
                    fingerprint: {
                        os: 'Macintosh OS X',
                        browser: 'Chrome',
                        language: 'fr-FR',
                        languages: [
                            'fr-FR',
                            'fr',
                            'en-US',
                            'en',
                            'la',
                            'zh-CN',
                            'zh',
                            'nl',
                            'de',
                            'mt',
                        ],
                        user_agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
                        device: 'Desktop',
                        referrer: 'N/A',
                        online: true,
                        timezone: 'Europe/Paris',
                        screen_resolution: '1280 x 800',
                        cookie_enabled: true,
                    },
                    timestamp: '2019-02-16T00:00:00.000Z',
                    collisions: 2,
                    visits: 3,
                    name: 'Frederick Alvarez',
                },
            ]);
        });
};
