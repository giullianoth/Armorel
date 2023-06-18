export const Data = {
    product: [
        {
            id: 1,
            name: "Brinco com decoração de strass Dourado",
            description: "",
            url: "brinco-com-decoracao-de-strass-dourado",

            general: {
                price: 200,
                promotional_price: 189,
                promotional_price_period: {
                    from: "",
                    to: "",
                },
            },

            stock: {
                quantity: 200,
                allow_order: false,
                low_stock_limit: 2,
                limit_one_item_per_order: false,
            },

            delivery: {
                weight: 0.2,
                length: 0.5,
                width: 1,
                height: 2,
            },

            delivery_class: "",

            related_products: {
                upsells: [],
                cross_sell: [],
            },

            custom_attributes: [
                {
                    attribute: "Material",
                    terms: ["Ouro"],
                    visible: true,
                }
            ],

            advanced: {
                note: "",
                order: 0,
                allow_rating: true,
            },

            images: {
                featured_image: "brinco-com-decoracao-de-strass-dourado.jpg",
                image_gallery: [
                    "brinco-com-decoracao-de-strass-dourado-2.jpg"
                ],
            },

            category: [1],
            is_variable: false,
            variations: null,
        },

        {
            id: 2,
            name: "Brinco de Argola 5.6cm - Cor Prata ou Dourado 1 Par",
            description: "",
            url: "brinco-de-argola-56cm-cor-prata-ou-dourado-1-par",
            general: null,

            stock: {
                quantity: 200,
                allow_order: false,
                low_stock_limit: 2,
                limit_one_item_per_order: false,
            },

            delivery: null,
            delivery_class: "",

            related_products: {
                upsells: [],
                cross_sell: [],
            },

            custom_attributes: [
                {
                    attribute: "Material",
                    terms: [
                        "Ouro",
                        "Prata"
                    ],
                    visible: true,
                },
            ],

            advanced: {
                note: "",
                order: 0,
                allow_rating: true,
            },

            images: {
                featured_image: "brinco-de-argola-56cm-cor-prata-ou-dourado-1-par.jpg",
                image_gallery: [
                    "brinco-de-argola-56cm-cor-prata-ou-dourado-1-par-2.jpg"
                ],
            },

            category: [1, 9],
            is_variable: true,

            variations: [
                {
                    attribute: ["Material"],
                    variation: ["Ouro"],
                    description: "",
                    visible: true,
                    images: {
                        featured_image: "",
                        image_gallery: [
                            ""
                        ],
                    },
                    price: 120,
                    promotional_price: null,
                    promotional_price_period: {
                        from: "",
                        to: "",
                    },
                    delivery: {
                        weight: 0.2,
                        length: 2,
                        width: 2,
                        height: 2,
                    },
                    delivery_class: "",
                },

                {
                    attribute: ["Material"],
                    variation: ["Prata"],
                    description: "",
                    visible: true,
                    images: {
                        featured_image: "",
                        image_gallery: [
                            ""
                        ],
                    },
                    price: 100,
                    promotional_price: 34,
                    promotional_price_period: {
                        from: "",
                        to: "",
                    },
                    delivery: {
                        weight: 0.2,
                        length: 2,
                        width: 3,
                        height: 3,
                    },
                    delivery_class: "",
                },
            ],
        },

        {
            id: 3,
            name: "2 peças de anel Dourado ou Prata de decoração de zirconia",
            description: "",
            url: "2-pecas-de-anel-dourado-ou-prata-de-decoracao-de-zirconia",

            general: null,

            stock: {
                quantity: 200,
                allow_order: false,
                low_stock_limit: 2,
                limit_one_item_per_order: false,
            },

            delivery: null,

            delivery_class: "",

            related_products: {
                upsells: [],
                cross_sell: [],
            },

            custom_attributes: [
                {
                    attribute: "Material",
                    terms: [
                        "Ouro",
                        "Prata"
                    ],
                    visible: true,
                },

                {
                    attribute: "Tamanho do Aro",
                    terms: [
                        "9",
                        "10",
                        "11",
                        "12",
                        "13",
                        "14",
                        "15",
                        "16",
                        "17",
                        "18",
                        "19",
                        "20",
                    ],
                    visible: true,
                },

                {
                    attribute: "Cor da Pedra",
                    terms: ["Transparente"],
                    visible: false,
                },
            ],

            advanced: {
                note: "",
                order: 0,
                allow_rating: true,
            },

            images: {
                featured_image: "",
                image_gallery: [
                    ""
                ],
            },

            category: [1, 7],

            is_variable: true,

            variations: [
                {
                    attribute: ["Material", "Tamanho do Aro"],
                    variation: ["Ouro", "9"],
                    description: "",
                    visible: true,
                    images: {
                        featured_image: "",
                        image_gallery: [
                            ""
                        ],
                    },
                    price: 200,
                    promotional_price: 150,
                    promotional_price_period: {
                        from: "",
                        to: "",
                    },
                    delivery: {
                        weight: 0.2,
                        length: 2,
                        width: 2,
                        height: 2,
                    },
                    delivery_class: "",
                },

                {
                    attribute: ["Material", "Tamanho do Aro"],
                    variation: ["Prata", "9"],
                    description: "",
                    visible: true,
                    images: {
                        featured_image: "",
                        image_gallery: [
                            ""
                        ],
                    },
                    price: 180,
                    promotional_price: 150,
                    promotional_price_period: {
                        from: "",
                        to: "",
                    },
                    delivery: {
                        weight: 0.2,
                        length: 2,
                        width: 3,
                        height: 3,
                    },
                    delivery_class: "",
                },
            ],
        },
    ],

    product_category: [
        {
            id: 1,
            url: "brincos",
            category: "Brincos",
        },

        {
            id: 2,
            url: "joias",
            category: "Jóias",
        },

        {
            id: 3,
            url: "pulseiras",
            category: "Pulseiras",
        },

        {
            id: 4,
            url: "colares",
            category: "Colares",
        },

        {
            id: 5,
            url: "relogios",
            category: "Relógios",
        },

        {
            id: 6,
            url: "aneis",
            category: "Anéis",
        },

        {
            id: 7,
            url: "conjuntos",
            category: "Conjuntos",
        },

        {
            id: 8,
            url: "braceletes",
            category: "Braceletes",
        },

        {
            id: 9,
            url: "argolas",
            category: "Argolas",
        },
    ],

    product_attributes: [
        {
            id: 1,
            url: "cor-da-pedra",
            attribute: "Cor da Pedra",
            terms: [
                "Branco",
                "Verde",
                "Vermelho",
                "Rosa",
                "Azul",
                "Transparente",
            ],
        },

        {
            id: 2,
            url: "tamanho-do-aro",
            attribute: "Tamanho do Aro",
            terms: [
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
            ],
        },

        {
            id: 3,
            url: "material",
            attribute: "Material",
            terms: [
                "Ouro",
                "Prata",
            ],
        },
    ],
}