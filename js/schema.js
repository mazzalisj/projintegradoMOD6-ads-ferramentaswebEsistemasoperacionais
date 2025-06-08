// js/schema.js

document.addEventListener('DOMContentLoaded', function() {
    const head = document.querySelector('head');

    // Schema para Organization e LocalBusiness
    const organizationLocalBusinessSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.suaacademia.com.br/#organization", // Substitua pelo seu domínio
                "name": "Academia Espaço Fitness",
                "url": "https://www.suaacademia.com.br/", // Substitua pelo seu domínio
                "logo": "https://www.suaacademia.com.br/image/logo-academia.png", // Substitua pelo seu domínio e caminho da logo
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+55-19-98765-4321", // Substitua pelo seu telefone (formato internacional)
                    "contactType": "customer service"
                },
                "sameAs": [
                    "https://www.facebook.com/suaacademia", // Substitua pela URL do seu Facebook
                    "https://www.instagram.com/suaacademia" // Substitua pela URL do seu Instagram
                ]
            },
            {
                "@type": "LocalBusiness",
                "@id": "https://www.suaacademia.com.br/#localbusiness", // Substitua pelo seu domínio
                "name": "Academia Espaço Fitness",
                "url": "https://www.suaacademia.com.br/", // Substitua pelo seu domínio
                "image": "https://www.suaacademia.com.br/image/academia1.jpg", // Substitua pelo seu domínio e uma imagem relevante
                "telephone": "+55-19-98765-4321", // Substitua pelo seu telefone (formato internacional)
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Rua Moacir Gomes Nabo, 208",
                    "addressLocality": "São Sebastião da Grama",
                    "addressRegion": "SP",
                    "postalCode": "13720-000", // Substitua pelo seu CEP se for diferente
                    "addressCountry": "BR"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "-21.706173", // Latitude do seu endereço (aprox.)
                    "longitude": "-46.790938" // Longitude do seu endereço (aprox.)
                },
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday"
                        ],
                        "opens": "06:00",
                        "closes": "22:00"
                    },
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Saturday"
                        ],
                        "opens": "08:00",
                        "closes": "14:00"
                    }
                ],
                "priceRange": "R$69.90 - R$129.90", // Faixa de preço dos planos
                "description": "Academia Espaço Fitness: sua jornada começa aqui! Oferecemos musculação, treinamento funcional e artes marciais com equipamentos de ponta e profissionais qualificados."
            }
        ]
    };

    const scriptOrganizationLocalBusiness = document.createElement('script');
    scriptOrganizationLocalBusiness.type = 'application/ld+json';
    scriptOrganizationLocalBusiness.textContent = JSON.stringify(organizationLocalBusinessSchema);
    head.appendChild(scriptOrganizationLocalBusiness);

    // Schema para WebSite (com capacidade de busca)
    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.suaacademia.com.br/", // Substitua pelo seu domínio
        "name": "Academia Espaço Fitness",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.suaacademia.com.br/busca?q={search_term_string}" // Substitua pela sua URL de busca interna
            },
            "query-input": "required name=search_term_string"
        }
    };

    const scriptWebSite = document.createElement('script');
    scriptWebSite.type = 'application/ld+json';
    scriptWebSite.textContent = JSON.stringify(webSiteSchema);
    head.appendChild(scriptWebSite);

    // Schemas para Services (Modalidades)
    const services = [
        {
            "name": "Musculação",
            "description": "Desenvolva força, resistência e defina seu corpo com nossos equipamentos modernos e acompanhamento profissional.",
            "image": "https://www.suaacademia.com.br/image/musculacao.webp" // Substitua pelo seu domínio e caminho da imagem
        },
        {
            "name": "Treinamento Funcional",
            "description": "Melhore sua capacidade física geral, equilíbrio e coordenação com exercícios dinâmicos e desafiadores.",
            "image": "https://www.suaacademia.com.br/image/treino-funcional.webp" // Substitua pelo seu domínio e caminho da imagem
        },
        {
            "name": "Artes Marciais",
            "description": "Aprenda técnicas de defesa pessoal, discipline o corpo e a mente, e aumente sua autoconfiança.",
            "image": "https://www.suaacademia.com.br/image/artes-marciais.jpg" // Substitua pelo seu domínio e caminho da imagem
        }
    ];

    services.forEach(service => {
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": service.name,
            "name": service.name,
            "description": service.description,
            "image": service.image,
            "provider": {
                "@type": "Organization",
                "name": "Academia Espaço Fitness",
                "url": "https://www.suaacademia.com.br/" // Substitua pelo seu domínio
            },
            "url": "https://www.suaacademia.com.br/#modalidades" // Link para a seção de modalidades
        };

        const scriptService = document.createElement('script');
        scriptService.type = 'application/ld+json';
        scriptService.textContent = JSON.stringify(serviceSchema);
        head.appendChild(scriptService);
    });
});