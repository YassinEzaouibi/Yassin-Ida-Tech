export const idaData = [
    {
        question_number: 1,
        group: "Situation Familiale",
        question: "Dans quelle tranche d'âge vous situez-vous ?",
        question_type: "age_range",
        choices: {
            1: "Moins de 30 ans",
            2: "Entre 31 et 40 ans",
            3: "Entre 41 et 50 ans",
            4: "Entre 51 et 60 ans",
            5: "Plus de 60 ans"
        },
        points: {
            1: { Prudent: 0, modere: 0, Agressif: 50 },
            2: { Prudent: 5, modere: 15, Agressif: 30 },
            3: { Prudent: 0, modere: 50, Agressif: 0 },
            4: { Prudent: 30, modere: 15, Agressif: 5 },
            5: { Prudent: 50, modere: 0, Agressif: 0 }
        }
    },
    {
        question_number: 2,
        group: "Situation Familiale",
        question: "Quel est votre sexe ?",
        question_type: "gender",
        choices: {
            1: "Homme",
            2: "Femme"
        },
        points: {
            1: { Prudent: 0, modere: 0, Agressif: 50 },
            2: { Prudent: 5, modere: 15, Agressif: 30 }
        }
    },
    {
        question_number: 3,
        group: "Situation Familiale",
        question: "Quelle est votre situation familiale ?",
        question_type: "marital_status",
        choices: {
            1: "Célibataire",
            2: "Marié",
            3: "Divorcé",
            4: "Veuf"
        },
        points: {
            1: { Prudent: 5, modere: 15, Agressif: 30 },
            2: { Prudent: 0, modere: 50, Agressif: 0 },
            3: { Prudent: 30, modere: 15, Agressif: 5 },
            4: { Prudent: 50, modere: 0, Agressif: 0 }
        }
    },
    {
        question_number: 4,
        group: "Situation Professionnelle",
        question: "Quel est votre niveau d'éducation ?",
        question_type: "education_level",
        choices: {
            1: "Niveau d'éducation primaire",
            2: "Niveau d'éducation secondaire",
            3: "Études supérieures (Bac +2)",
            4: "Études supérieures (Bac +3 ou plus)"
        },
        points: {
            1: { Prudent: 0, modere: 50, Agressif: 0 },
            2: { Prudent: 5, modere: 15, Agressif: 30 },
            3: { Prudent: 30, modere: 15, Agressif: 5 },
            4: { Prudent: 50, modere: 0, Agressif: 0 }
        }
    },
    {
        question_number: 5,
        group: "Situation Professionnelle",
        question: "Quelle est votre situation professionnelle ?",
        question_type: "employment_status",
        choices: {
            1: "Employé",
            2: "Indépendant",
            3: "Sans emploi",
            4: "Retraité"
        },
        points: {
            1: { Prudent: 0, modere: 50, Agressif: 0 },
            2: { Prudent: 30, modere: 15, Agressif: 5 },
            3: { Prudent: 50, modere: 0, Agressif: 0 },
            4: { Prudent: 5, modere: 15, Agressif: 30 }
        }
    },
    {
        question_number: 6,
        group: "Situation Professionnelle",
        question: "Quel est votre secteur d'activité ?",
        question_type: "industry_sector",
        choices: {
            1: "Technologie",
            2: "Finance",
            3: "Santé",
            4: "Éducation",
            5: "Autre"
        },
        points: {
            1: { Prudent: 0, modere: 50, Agressif: 0 },
            2: { Prudent: 5, modere: 15, Agressif: 30 },
            3: { Prudent: 30, modere: 15, Agressif: 5 },
            4: { Prudent: 50, modere: 0, Agressif: 0 },
            5: { Prudent: 15, modere: 30, Agressif: 5 }
        }
    },
    {
        question_number: 7,
        group: "Situation Financière",
        question: "Quel est le montant de votre épargne actuelle ?",
        question_type: "savings_amount",
        choices: {
            1: "Moins de 10 000 dhs.",
            2: "Entre 10 000 dhs et 50 000 dhs.",
            3: "Entre 50 000 dhs et 100 000 dhs.",
            4: "Plus de 100 000 dhs."
        },
        points: {
            1: { Prudent: 0, modere: 50, Agressif: 0 },
            2: { Prudent: 5, modere: 15, Agressif: 30 },
            3: { Prudent: 30, modere: 15, Agressif: 5 },
            4: { Prudent: 50, modere: 0, Agressif: 0 }
        }
    },
    {
        question_number: 8,
        group: "Situation Financière",
        question: "Quel est votre niveau de revenu annuel ?",
        question_type: "annual_income",
        choices: {
            1: "Moins de 20 000 dhs",
            2: "Entre 20 000 dhs et 50 000 dhs",
            3: "Entre 50 000 dhs et 100 000 dhs",
            4: "Plus de 100 000 dhs"
        },
        points: {
            1: { Prudent: 0, modere: 50, Agressif: 0 },
            2: { Prudent: 5, modere: 15, Agressif: 30 },
            3: { Prudent: 30, modere: 15, Agressif: 5 },
            4: { Prudent: 50, modere: 0, Agressif: 0 }
        }
    },
    {
        question_number: 9,
        group: "Investissement",
        question: "Combien de temps prévoyez-vous de conserver votre investissement ?",
        question_type: "investment_duration",
        choices: {
            1: "Moins de 1 an",
            2: "De 1 à 3 ans",
            3: "De 3 à 5 ans",
            4: "Plus de 5 ans"
        },
        points: {
            1: { Prudent: 50, modere: 0, Agressif: 0 },
            2: { Prudent: 30, modere: 15, Agressif: 5 },
            3: { Prudent: 15, modere: 30, Agressif: 5 },
            4: { Prudent: 0, modere: 50, Agressif: 0 }
        }
    },
    {
        question_number: 10,
        group: "Investissement",
        question: "Quel est votre niveau de connaissance en matière d'investissement ?",
        question_type: "investment_knowledge",
        choices: {
            1: "Débutant",
            2: "Intermédiaire",
            3: "Avancé"
        },
        points: {
            1: { Prudent: 50, modere: 0, Agressif: 0 },
            2: { Prudent: 15, modere: 30, Agressif: 5 },
            3: { Prudent: 0, modere: 50, Agressif: 0 }
        }
    },
    {
        question_number: 11,
        group: "Investissement",
        question: "Quel est votre niveau de tolérance au risque ?",
        question_type: "risk_tolerance",
        choices: {
            1: "Faible",
            2: "Modéré",
            3: "Élevé"
        },
        points: {
            1: { Prudent: 50, modere: 0, Agressif: 0 },
            2: { Prudent: 15, modere: 30, Agressif: 5 },
            3: { Prudent: 0, modere: 50, Agressif: 0 }
        }
    },
    {
        question_number: 12,
        group: "Investissement",
        question: "Avez-vous des connaissances en gestion financière ou en investissement ?",
        question_type: "financial_knowledge",
        choices: {
            1: "Oui",
            2: "Non"
        },
        points: {
            1: { Prudent: 0, modere: 30, Agressif: 50 },
            2: { Prudent: 50, modere: 30, Agressif: 0 }
        }
    },
    {
        question_number: 13,
        group: "Investissement",
        question: "Quel pourcentage de votre revenu pouvez-vous investir chaque mois ?",
        question_type: "investment_percentage",
        choices: {
            1: "Moins de 10%",
            2: "De 10% à 30%",
            3: "Plus de 30%"
        },
        points: {
            1: { Prudent: 0, modere: 30, Agressif: 50 },
            2: { Prudent: 15, modere: 30, Agressif: 30 },
            3: { Prudent: 30, modere: 15, Agressif: 5 }
        }
    },
    {
        question_number: 14,
        group: "Investissement",
        question: "Quel est votre objectif principal d'investissement ?",
        question_type: "investment_goal",
        choices: {
            1: "Croissance du capital",
            2: "Génération de revenus",
            3: "Préservation du capital"
        },
        points: {
            1: { Prudent: 30, modere: 15, Agressif: 5 },
            2: { Prudent: 15, modere: 30, Agressif: 30 },
            3: { Prudent: 5, modere: 15, Agressif: 30 }
        }
    },
    {
        question_number: 15,
        group: "Investissement",
        question: "À quel point êtes-vous à l'aise avec l'évolution de la valeur de vos investissements ?",
        question_type: "investment_value_change",
        choices: {
            1: "Très à l'aise",
            2: "Assez à l'aise",
            3: "Peu à l'aise",
            4: "Pas du tout à l'aise"
        },
        points: {
            1: { Prudent: 0, modere: 0, Agressif: 50 },
            2: { Prudent: 5, modere: 15, Agressif: 30 },
            3: { Prudent: 15, modere: 30, Agressif: 30 },
            4: { Prudent: 30, modere: 15, Agressif: 5 }
        }
    },
    {
        question_number: 16,
        group: "Investissement",
        question: "Combien de temps prévoyez-vous de laisser vos investissements sans y toucher ?",
        question_type: "investment_time_horizon",
        choices: {
            1: "Moins de 2 ans",
            2: "De 2 à 5 ans",
            3: "Plus de 5 ans"
        },
        points: {
            1: { Prudent: 30, modere: 15, Agressif: 5 },
            2: { Prudent: 15, modere: 30, Agressif: 30 },
            3: { Prudent: 5, modere: 15, Agressif: 30 }
        }
    },
    {
        question_number: 17,
        group: "Investissement",
        question: "À quelle fréquence prévoyez-vous d'ajuster votre portefeuille d'investissement ?",
        question_type: "investment_adjustment_frequency",
        choices: {
            1: "Jamais",
            2: "Tous les 2-3 ans",
            3: "Tous les 1-2 ans",
            4: "Tous les 6 mois",
            5: "Tous les mois"
        },
        points: {
            1: { Prudent: 30, modere: 15, Agressif: 5 },
            2: { Prudent: 15, modere: 30, Agressif: 30 },
            3: { Prudent: 5, modere: 15, Agressif: 30 },
            4: { Prudent: 0, modere: 15, Agressif: 30 },
            5: { Prudent: 0, modere: 0, Agressif: 50 }
        }
    },
    {
        question_number: 18,
        group: "Investissement",
        question: "Quel est votre niveau de tolérance aux fluctuations des marchés financiers ?",
        question_type: "market_fluctuation_tolerance",
        choices: {
            1: "Très faible",
            2: "Faible",
            3: "Modéré",
            4: "Élevé",
            5: "Très élevé"
        },
        points: {
            1: { Prudent: 50, modere: 30, Agressif: 0 },
            2: { Prudent: 30, modere: 30, Agressif: 15 },
            3: { Prudent: 15, modere: 30, Agressif: 30 },
            4: { Prudent: 5, modere: 15, Agressif: 30 },
            5: { Prudent: 0, modere: 0, Agressif: 50 }
        }
    },
    {
        question_number: 19,
        group: "Investissement",
        question: "Avez-vous des dettes importantes (hors prêt immobilier) ?",
        question_type: "significant_debt",
        choices: {
            1: "Oui",
            2: "Non"
        },
        points: {
            1: { Prudent: 50, modere: 30, Agressif: 0 },
            2: { Prudent: 0, modere: 0, Agressif: 50 }
        }
    },
    {
        question_number: 20,
        group: "Investissement",
        question: "Quel est votre niveau de revenu annuel ?",
        question_type: "annual_income",
        choices: {
            1: "Moins de 30 000 dhs",
            2: "De 30 000 dhs à 50 000 dhs",
            3: "De 50 000 dhs à 100 000 dhs",
            4: "Plus de 100 000 dhs"
        },
        points: {
            1: { Prudent: 30, modere: 15, Agressif: 5 },
            2: { Prudent: 15, modere: 30, Agressif: 30 },
            3: { Prudent: 5, modere: 15, Agressif: 30 },
            4: { Prudent: 0, modere: 0, Agressif: 50 }
        }
    },
    {
        question_number: 21,
        group: "Investissement",
        question: "Quelle part de vos revenus est actuellement épargnée ?",
        question_type: "current_savings_rate",
        choices: {
            1: "Moins de 10%",
            2: "De 10% à 20%",
            3: "De 20% à 30%",
            4: "Plus de 30%"
        },
        points: {
            1: { Prudent: 30, modere: 15, Agressif: 5 },
            2: { Prudent: 15, modere: 30, Agressif: 30 },
            3: { Prudent: 5, modere: 15, Agressif: 30 },
            4: { Prudent: 0, modere: 0, Agressif: 50 }
        }
    },
    {
        question_number: 22,
        group: "Investissement",
        question: "Quel est votre niveau d'éducation financière ?",
        question_type: "financial_education_level",
        choices: {
            1: "Faible",
            2: "Moyen",
            3: "Élevé"
        },
        points: {
            1: { Prudent: 50, modere: 30, Agressif: 0 },
            2: { Prudent: 30, modere: 30, Agressif: 15 },
            3: { Prudent: 15, modere: 30, Agressif: 30 }
        }
    },
    {
        question_number: 23,
        group: "Investissement",
        question: "Avez-vous des personnes à charge financièrement ?",
        question_type: "dependents",
        choices: {
            1: "Oui",
            2: "Non"
        },
        points: {
            1: { Prudent: 30, modere: 15, Agressif: 5 },
            2: { Prudent: 0, modere: 0, Agressif: 50 }
        }
    },
    {
        question_number: 24,
        group: "Investissement",
        question: "Quel est le montant de votre patrimoine financier actuel ?",
        question_type: "financial_assets_amount",
        choices: {
            1: "Moins de 50 000 dhs",
            2: "De 50 000 dhs à 100 000 dhs",
            3: "De 100 000 dhs à 500 000 dhs",
            4: "Plus de 500 000 dhs"
        },
        points: {
            1: { Prudent: 50, modere: 30, Agressif: 0 },
            2: { Prudent: 30, modere: 30, Agressif: 15 },
            3: { Prudent: 15, modere: 30, Agressif: 30 },
            4: { Prudent: 5, modere: 15, Agressif: 50 }
        }
    },
    {
        question_number: 25,
        group: "Investissement",
        question: "Quel est le montant de vos revenus annuels nets ?",
        question_type: "annual_income",
        choices: {
            1: "Moins de 20 000 dhs",
            2: "De 20 000 dhs à 40 000 dhs",
            3: "De 40 000 dhs à 80 000 dhs",
            4: "Plus de 80 000 dhs"
        },
        points: {
            1: { Prudent: 50, modere: 30, Agressif: 0 },
            2: { Prudent: 30, modere: 30, Agressif: 15 },
            3: { Prudent: 15, modere: 30, Agressif: 30 },
            4: { Prudent: 5, modere: 15, Agressif: 50 }
        }
    },
    {
        question_number: 26,
        group: "Investissement",
        question: "Combien de temps pensez-vous pouvoir laisser votre argent investi sans en avoir besoin ?",
        question_type: "investment_time_horizon",
        choices: {
            1: "Moins de 2 ans",
            2: "De 2 à 5 ans",
            3: "De 5 à 10 ans",
            4: "Plus de 10 ans"
        },
        points: {
            1: { Prudent: 50, modere: 30, Agressif: 0 },
            2: { Prudent: 30, modere: 30, Agressif: 15 },
            3: { Prudent: 15, modere: 30, Agressif: 30 },
            4: { Prudent: 5, modere: 15, Agressif: 50 }
        }
    },
    {
        question_number: 27,
        group: "Investissement",
        question: "Quelle est votre expérience en matière d'investissement financier ?",
        question_type: "investment_experience",
        choices: {
            1: "Aucune expérience",
            2: "Faible expérience",
            3: "Expérience modérée",
            4: "Expérience élevée"
        },
        points: {
            1: { Prudent: 50, modere: 30, Agressif: 0 },
            2: { Prudent: 30, modere: 30, Agressif: 15 },
            3: { Prudent: 15, modere: 30, Agressif: 30 },
            4: { Prudent: 5, modere: 15, Agressif: 50 }
        }
    },
    {
        question_number: 28,
        group: "Investissement",
        question: "Êtes-vous prêt à perdre une partie de votre capital pour espérer en gagner davantage ?",
        question_type: "willingness_to_lose_capital",
        choices: {
            1: "Oui, totalement",
            2: "Oui, partiellement",
            3: "Non"
        },
        points: {
            1: { Prudent: 0, modere: 15, Agressif: 30 },
            2: { Prudent: 5, modere: 30, Agressif: 50 },
            3: { Prudent: 50, modere: 30, Agressif: 0 }
        }
    },
    {
        question_number: 29,
        group: "Investissement",
        question: "Combien de temps consacrez-vous habituellement à la gestion de vos finances personnelles ?",
        question_type: "time_spent_on_financial_management",
        choices: {
            1: "Moins de 1 heure par mois",
            2: "De 1 à 3 heures par mois",
            3: "Plus de 3 heures par mois"
        },
        points: {
            1: { Prudent: 30, modere: 15, Agressif: 5 },
            2: { Prudent: 15, modere: 30, Agressif: 30 },
            3: { Prudent: 5, modere: 15, Agressif: 30 }
        }
    },
    {
        question_number: 30,
        group: "Investissement",
        question: "À quel âge estimez-vous devoir commencer à prélever sur votre épargne pour subvenir à vos besoins ?",
        question_type: "age_to_start_withdrawing_savings",
        choices: {
            1: "Avant 55 ans",
            2: "De 55 à 65 ans",
            3: "Après 65 ans",
            4: "Je ne sais pas"
        },
        points: {
            1: { Prudent: 30, modere: 15, Agressif: 5 },
            2: { Prudent: 15, modere: 30, Agressif: 30 },
            3: { Prudent: 5, modere: 15, Agressif: 30 },
            4: { Prudent: 0, modere: 0, Agressif: 50 }
        }
    },
    {
        question_number: 31,
        group: "Investissement",
        question: "Quel est votre niveau de confiance dans votre capacité à prendre des décisions financières ?",
        question_type: "financial_decision_confidence",
        choices: {
            1: "Très faible",
            2: "Faible",
            3: "Modéré",
            4: "Élevé",
            5: "Très élevé"
        },
        points: {
            1: { Prudent: 50, modere: 30, Agressif: 0 },
            2: { Prudent: 30, modere: 30, Agressif: 15 },
            3: { Prudent: 15, modere: 30, Agressif: 30 },
            4: { Prudent: 5, modere: 15, Agressif: 30 },
            5: { Prudent: 0, modere: 0, Agressif: 50 }
        }
    },
    {
        question_number: 32,
        group: "Investissement",
        question: "Quel est votre niveau de tolérance au risque financier ?",
        question_type: "financial_risk_tolerance",
        choices: {
            1: "Très faible",
            2: "Faible",
            3: "Modéré",
            4: "Élevé",
            5: "Très élevé"
        },
        points: {
            1: { Prudent: 50, modere: 30, Agressif: 0 },
            2: { Prudent: 30, modere: 30, Agressif: 15 },
            3: { Prudent: 15, modere: 30, Agressif: 30 },
            4: { Prudent: 5, modere: 15, Agressif: 30 },
            5: { Prudent: 0, modere: 0, Agressif: 50 }
        }
    }
];