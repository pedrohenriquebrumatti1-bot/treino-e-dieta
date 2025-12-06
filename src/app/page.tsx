"use client";

import { useState } from "react";
import { Dumbbell, Utensils, Target, TrendingDown, TrendingUp, Clock, Flame, Apple } from "lucide-react";

type Goal = "emagrecer" | "ganhar-massa" | null;
type Tab = "treinos" | "dietas";

export default function Home() {
  const [goal, setGoal] = useState<Goal>(null);
  const [activeTab, setActiveTab] = useState<Tab>("treinos");

  const workouts = {
    emagrecer: [
      {
        title: "HIIT Cardio Intenso",
        duration: "30 min",
        calories: "400-500 kcal",
        exercises: ["Burpees (4x15)", "Mountain Climbers (4x20)", "Jumping Jacks (4x30)", "High Knees (4x20)"],
        frequency: "4-5x por semana"
      },
      {
        title: "Circuito Full Body",
        duration: "45 min",
        calories: "350-450 kcal",
        exercises: ["Agachamento (4x15)", "Flexão (4x12)", "Prancha (4x45s)", "Lunges (4x12)"],
        frequency: "3-4x por semana"
      },
      {
        title: "Cardio Moderado",
        duration: "60 min",
        calories: "300-400 kcal",
        exercises: ["Corrida leve", "Bicicleta", "Elíptico", "Caminhada rápida"],
        frequency: "5-6x por semana"
      },
      {
        title: "Treino Abdômen Definição",
        duration: "25 min",
        calories: "150-200 kcal",
        exercises: ["Abdominal supra (4x20)", "Prancha lateral (4x30s)", "Bicicleta no ar (4x20)", "Elevação de pernas (4x15)"],
        frequency: "3-4x por semana"
      },
      {
        title: "Treino de Resistência",
        duration: "50 min",
        calories: "350-400 kcal",
        exercises: ["Polichinelos (5x30)", "Agachamento jump (4x15)", "Prancha dinâmica (4x40s)", "Escalador (4x25)"],
        frequency: "3x por semana"
      },
      {
        title: "Treino Funcional",
        duration: "40 min",
        calories: "300-380 kcal",
        exercises: ["Swing com kettlebell (4x15)", "Box jump (4x12)", "Farmer walk (4x30s)", "Wall ball (4x15)"],
        frequency: "2-3x por semana"
      }
    ],
    "ganhar-massa": [
      {
        title: "Peito e Tríceps",
        duration: "60 min",
        calories: "250-300 kcal",
        exercises: ["Supino reto (4x10)", "Supino inclinado (4x10)", "Crucifixo (3x12)", "Tríceps testa (4x12)", "Tríceps corda (3x15)"],
        frequency: "1x por semana"
      },
      {
        title: "Costas e Bíceps",
        duration: "60 min",
        calories: "250-300 kcal",
        exercises: ["Barra fixa (4x8)", "Remada curvada (4x10)", "Puxada frontal (4x12)", "Rosca direta (4x12)", "Rosca martelo (3x12)"],
        frequency: "1x por semana"
      },
      {
        title: "Pernas Completo",
        duration: "70 min",
        calories: "300-350 kcal",
        exercises: ["Agachamento livre (4x10)", "Leg press (4x12)", "Cadeira extensora (4x15)", "Cadeira flexora (4x12)", "Panturrilha (4x20)"],
        frequency: "1x por semana"
      },
      {
        title: "Ombros e Trapézio",
        duration: "55 min",
        calories: "230-280 kcal",
        exercises: ["Desenvolvimento militar (4x10)", "Elevação lateral (4x12)", "Elevação frontal (3x12)", "Encolhimento (4x15)", "Remada alta (3x12)"],
        frequency: "1x por semana"
      },
      {
        title: "Abdômen e Core",
        duration: "35 min",
        calories: "180-220 kcal",
        exercises: ["Abdominal com peso (4x15)", "Prancha com peso (4x45s)", "Abdominal oblíquo (4x15)", "Elevação de pernas (4x12)", "Russian twist (4x20)"],
        frequency: "2-3x por semana"
      },
      {
        title: "Treino de Força",
        duration: "65 min",
        calories: "280-330 kcal",
        exercises: ["Levantamento terra (4x8)", "Agachamento frontal (4x10)", "Supino fechado (4x10)", "Remada unilateral (4x10)", "Barra fixa pegada fechada (4x8)"],
        frequency: "1x por semana"
      },
      {
        title: "Braços Completo",
        duration: "50 min",
        calories: "200-250 kcal",
        exercises: ["Rosca alternada (4x12)", "Tríceps francês (4x12)", "Rosca concentrada (3x12)", "Tríceps mergulho (4x10)", "Rosca inversa (3x15)"],
        frequency: "1x por semana"
      }
    ]
  };

  const diets = {
    emagrecer: {
      calories: "1500-1800 kcal/dia",
      macros: { protein: "30%", carbs: "40%", fats: "30%" },
      meals: [
        {
          name: "Café da Manhã",
          foods: ["2 ovos mexidos", "1 fatia de pão integral", "1 fruta", "Café sem açúcar"],
          calories: "350 kcal"
        },
        {
          name: "Lanche da Manhã",
          foods: ["1 iogurte grego natural", "1 colher de chia", "Morangos"],
          calories: "180 kcal"
        },
        {
          name: "Almoço",
          foods: ["150g de frango grelhado", "3 col. de arroz integral", "Salada verde", "Legumes cozidos", "Azeite"],
          calories: "500 kcal"
        },
        {
          name: "Lanche da Tarde",
          foods: ["1 porção de oleaginosas", "1 fruta", "Chá verde"],
          calories: "200 kcal"
        },
        {
          name: "Jantar",
          foods: ["150g de peixe grelhado", "Salada completa", "2 col. de batata doce", "Brócolis"],
          calories: "400 kcal"
        },
        {
          name: "Ceia (Opcional)",
          foods: ["Chá de camomila", "3 castanhas"],
          calories: "80 kcal"
        }
      ],
      alternatives: [
        {
          name: "Plano Low Carb",
          description: "Redução de carboidratos para acelerar perda de gordura",
          calories: "1400-1600 kcal/dia",
          macros: { protein: "40%", carbs: "25%", fats: "35%" }
        },
        {
          name: "Plano Jejum Intermitente",
          description: "Protocolo 16/8 - janela alimentar de 8 horas",
          calories: "1500-1700 kcal/dia",
          macros: { protein: "35%", carbs: "35%", fats: "30%" }
        },
        {
          name: "Plano Mediterrâneo",
          description: "Baseado em gorduras saudáveis e alimentos naturais",
          calories: "1600-1800 kcal/dia",
          macros: { protein: "25%", carbs: "45%", fats: "30%" }
        }
      ]
    },
    "ganhar-massa": {
      calories: "2800-3200 kcal/dia",
      macros: { protein: "35%", carbs: "45%", fats: "20%" },
      meals: [
        {
          name: "Café da Manhã",
          foods: ["4 ovos mexidos", "2 fatias de pão integral", "Aveia com banana", "Suco natural", "Pasta de amendoim"],
          calories: "700 kcal"
        },
        {
          name: "Lanche da Manhã",
          foods: ["Whey protein", "1 banana", "Aveia", "Mel"],
          calories: "350 kcal"
        },
        {
          name: "Almoço",
          foods: ["200g de carne vermelha", "5 col. de arroz", "Feijão", "Salada", "Batata", "Azeite"],
          calories: "900 kcal"
        },
        {
          name: "Lanche Pré-Treino",
          foods: ["Whey protein", "2 bananas", "Pasta de amendoim", "Aveia"],
          calories: "450 kcal"
        },
        {
          name: "Lanche Pós-Treino",
          foods: ["Whey protein", "Dextrose ou maltodextrina", "Creatina", "1 fruta"],
          calories: "300 kcal"
        },
        {
          name: "Jantar",
          foods: ["200g de frango", "5 col. de arroz integral", "Legumes", "Salada", "Azeite"],
          calories: "700 kcal"
        },
        {
          name: "Ceia",
          foods: ["Caseína ou iogurte grego", "Oleaginosas", "1 fruta"],
          calories: "350 kcal"
        }
      ],
      alternatives: [
        {
          name: "Plano Hipercalórico Intenso",
          description: "Para ganho de massa acelerado (hardgainers)",
          calories: "3500-4000 kcal/dia",
          macros: { protein: "30%", carbs: "50%", fats: "20%" }
        },
        {
          name: "Plano Lean Bulk",
          description: "Ganho de massa magra com mínimo de gordura",
          calories: "2600-2900 kcal/dia",
          macros: { protein: "40%", carbs: "40%", fats: "20%" }
        },
        {
          name: "Plano Vegetariano",
          description: "Ganho de massa sem carne",
          calories: "2800-3100 kcal/dia",
          macros: { protein: "35%", carbs: "45%", fats: "20%" }
        },
        {
          name: "Plano Paleo Massa",
          description: "Baseado em alimentos naturais e não processados",
          calories: "2900-3200 kcal/dia",
          macros: { protein: "35%", carbs: "40%", fats: "25%" }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-xl">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                FitLife Pro
              </h1>
            </div>
            {goal && (
              <button
                onClick={() => setGoal(null)}
                className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
              >
                Trocar objetivo
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {!goal ? (
          /* Goal Selection */
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Target className="w-16 h-16 mx-auto mb-4 text-purple-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Qual é o seu objetivo?
              </h2>
              <p className="text-lg text-gray-600">
                Escolha seu objetivo para receber treinos e dietas personalizados
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Emagrecer Card */}
              <button
                onClick={() => setGoal("emagrecer")}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-purple-500"
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingDown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Emagrecer</h3>
                <p className="text-gray-600 mb-4">
                  Perca peso de forma saudável com treinos intensos e dieta balanceada
                </p>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-orange-500" />
                    Queima de gordura acelerada
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    Treinos de 25-60 minutos
                  </li>
                  <li className="flex items-center gap-2">
                    <Apple className="w-4 h-4 text-orange-500" />
                    Dieta com déficit calórico
                  </li>
                </ul>
              </button>

              {/* Ganhar Massa Card */}
              <button
                onClick={() => setGoal("ganhar-massa")}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-purple-500"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Ganhar Massa</h3>
                <p className="text-gray-600 mb-4">
                  Construa músculos com treinos de força e alimentação hipercalórica
                </p>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <Dumbbell className="w-4 h-4 text-blue-500" />
                    Hipertrofia muscular
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    Treinos de 35-70 minutos
                  </li>
                  <li className="flex items-center gap-2">
                    <Apple className="w-4 h-4 text-blue-500" />
                    Dieta com superávit calórico
                  </li>
                </ul>
              </button>
            </div>
          </div>
        ) : (
          /* Main Content */
          <div>
            {/* Goal Badge */}
            <div className="flex items-center justify-center mb-8">
              <div className="bg-white rounded-full px-6 py-3 shadow-md flex items-center gap-3">
                {goal === "emagrecer" ? (
                  <>
                    <TrendingDown className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold text-gray-900">Objetivo: Emagrecer</span>
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">Objetivo: Ganhar Massa</span>
                  </>
                )}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-2xl p-2 shadow-md inline-flex gap-2">
                <button
                  onClick={() => setActiveTab("treinos")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeTab === "treinos"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Dumbbell className="w-5 h-5" />
                  Treinos
                </button>
                <button
                  onClick={() => setActiveTab("dietas")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeTab === "dietas"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Utensils className="w-5 h-5" />
                  Dietas
                </button>
              </div>
            </div>

            {/* Content */}
            {activeTab === "treinos" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workouts[goal].map((workout, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{workout.title}</h3>
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg">
                        <Dumbbell className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-purple-500" />
                        <span>{workout.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Flame className="w-4 h-4 text-orange-500" />
                        <span>{workout.calories}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Target className="w-4 h-4 text-blue-500" />
                        <span>{workout.frequency}</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Exercícios:</p>
                      <ul className="space-y-1">
                        {workout.exercises.map((exercise, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                            {exercise}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="max-w-4xl mx-auto space-y-6">
                {/* Main Diet Plan */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
                      <Apple className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Plano Alimentar Principal</h3>
                      <p className="text-gray-600">Meta diária: {diets[goal].calories}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">Proteínas</p>
                      <p className="text-2xl font-bold text-purple-600">{diets[goal].macros.protein}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">Carboidratos</p>
                      <p className="text-2xl font-bold text-pink-600">{diets[goal].macros.carbs}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">Gorduras</p>
                      <p className="text-2xl font-bold text-orange-600">{diets[goal].macros.fats}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {diets[goal].meals.map((meal, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-4 hover:border-purple-300 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-bold text-gray-900">{meal.name}</h4>
                          <span className="text-sm font-semibold text-purple-600">{meal.calories}</span>
                        </div>
                        <ul className="space-y-1">
                          {meal.foods.map((food, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                              {food}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alternative Diet Plans */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Planos Alternativos</h3>
                  <p className="text-gray-600 mb-6">Escolha o plano que melhor se adapta ao seu estilo de vida</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {diets[goal].alternatives.map((alt, index) => (
                      <div
                        key={index}
                        className="border-2 border-gray-200 rounded-xl p-5 hover:border-purple-400 transition-all hover:shadow-md"
                      >
                        <h4 className="font-bold text-gray-900 mb-2">{alt.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{alt.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Calorias:</span>
                            <span className="font-semibold text-purple-600">{alt.calories}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs bg-gray-50 rounded-lg p-2">
                            <span className="text-gray-600">P: {alt.macros.protein}</span>
                            <span className="text-gray-600">C: {alt.macros.carbs}</span>
                            <span className="text-gray-600">G: {alt.macros.fats}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tip Card */}
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white text-center">
                  <p className="text-sm font-semibold mb-2">💡 Dica Importante</p>
                  <p className="text-sm opacity-90">
                    {goal === "emagrecer"
                      ? "Mantenha-se hidratado e evite alimentos processados. A consistência é a chave para o sucesso!"
                      : "Consuma proteína em todas as refeições e não pule as refeições. O descanso é tão importante quanto o treino!"}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
