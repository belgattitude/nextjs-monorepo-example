
export default function PocYannick() {
  return (
    <body>
    <section className=" shadow-sm">
      <div className="container px-4 mx-auto">
        <nav className="flex items-center py-6">
          <div className="block mx-auto text-3xl font-semibold leading-none">
            <img
              className="h-10"
              src="https://cdn.glitch.com/fc43596d-c9af-428a-a6a4-f9e0264a31c0%2Flogo%20(2).svg?v=1607896004183"
              alt=""
              width="auto"
            />
          </div>
        </nav>
      </div>
    </section>

    <div className="flex justify-center">
      <!-- component -->
      <div className="relative max-w-screen-md m-4 sm:m-12">
        <div
          className="border-r-2 border-gray-300 absolute h-full top-0"
          style="left: 15px"
        ></div>
        <ul className="list-none m-0 p-0">
          <li className="mb-2">
            <div className="flex items-center mb-1 z-50">
              <div className="bg-gray-300 rounded-full h-8 w-8"></div>
              <div
                className="flex-1 ml-4 text-sm md:text-base font-normal text-gray-600"
              >
                Etape 1: Créer votre demande
              </div>
            </div>

            <div className="ml-12 shadow-md rounded-xl bg-white ">
              <figure className="md:flex p-4 md:p-0 md:p-0">
                <div className="md:p-4 text-left space-y-4">
                  <div className="grid grid-cols-6 gap-0">
                    <div>
                      <img
                        className="md:p-4"
                        src="https://cdn.glitch.com/fc43596d-c9af-428a-a6a4-f9e0264a31c0%2Fflaticon.svg?v=1610533925718"
                        width="160"
                        height="160"
                      />
                    </div>
                    <div className="col-start-2 col-span-5">
                      <div className="md:p-4 text-left space-y-4">
                        <p className="text-lg md:text-2xl font-bold text-grey-900 ">
                          Félicitations, nous avons reçu votre demande !
                        </p>
                        <p className="text-base md:text-lg text-gray-700">
                          Nous inspectons les détails de votre demande afin de vous
                          mettre en relation avec les meilleures agences.
                        </p>
                        <br />
                        <a
                          id="access-briefing"
                          target="_blank"
                          className="cursor-not-allowed inline-flex items-center h-10 px-5 py-1 md:py-2 mt-5 text-sm md:text-base text-grey-700 transition-colors duration-150 border border-grey-300 rounded-lg focus:shadow-outline bg-gray-300"
                        >
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Modifier ma demande
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
            <br />
            <br />
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1">
              <div className="bg-gray-600 rounded-full h-8 w-8 z-50"></div>
              <div
                className="flex-1 ml-4 text-sm md:text-base font-bold text-gray-600"
              >
                Prochaine étape: Finaliser votre liste d'agences
              </div>
            </div>
            <div
              className="ml-12 shadow-xl rounded-xl bg-white	border-gray-900 border-2	"
            >
              <figure className="md:flex p-4 md:p-8 md:p-0">
                <div className="pt-6 md:pt-8 text-left m space-y-4">
                  <p className="text-lg md:text-2xl font-bold text-gray-900	">
                    Finaliser gratuitement votre liste avec un expert
                  </p>

                  <figcaption className="font-medium flex flex-x-9">
                    <div className="w-12 sm:w-50 flex-initial">
                      <img
                        className="rounded-full object_contain"
                        src="https://cdn.glitch.com/fc43596d-c9af-428a-a6a4-f9e0264a31c0%2Fyannick.jpg"
                        alt=""
                      />
                    </div>

                    <div className="ml-3 sm:ml-5 rounded-full flex-auto">
                      <div className="text-sm sm:text-base text-cyan-600">
                        Yannick
                      </div>
                      <div className="text-sm sm:text-base text-gray-500 ">
                        Expert Digital, Sortlist
                      </div>
                    </div>
                  </figcaption>
                  <blockquote>
                    <p className="text-base md:text-lg text-gray-700">
                      Maximiser vos chances de contact avec les meilleures
                      agences en échangeant avec Yannick, votre expert dédié.
                      Il prendra contact avec vous pour parcourir vos besoins
                      plus amplement et ainsi valider votre projet.
                      100% gratuit, cet échange téléphonique a pour but de:

                    </p>

                    <ul className="mt-5 text-base md:text-lg text-gray-700">
                      <li>
                        1. Affiner vos besoins sur base de vos objectifs
                      </li>
                      <li>
                        2. Estimer le budget nécessaire à votre cahier des charges
                      </li>
                      <li>
                        3. Définir le type d’agences à vous suggérer
                      </li>
                    </ul>
                    <p className="my-8 font-normal text-gray-600">
                      Il prendra contact avec vous dans les 24h.
                      Vous pouvez également choisir proactivement le créneau de votre choix dans son agenda.

                    </p>
                  </blockquote>
                  <div className="flex flex-wrap">
                    <div className="flex-none h-10 md:h-12 mb-3">
                      <a
                        id="call-matchmaker-calendly"
                        href="https://calendly.com/sortlist-match-making/accompagnement-projet-personnalise-sortlist"
                        target="_blank"
                        className="mb-3 px-4 py-2 md:py-3 text-sm md:text-base align-middle text-white bg-blue-500 transition-colors duration-150 border border-blue-500 rounded-lg cursor-pointer focus:shadow-outline hover:border-blue-700 hover:bg-blue-700 hover:text-white mr-6"
                      >
                        Planifier l'appel
                      </a>
                    </div>
                    <div className="flex-none h-10 md:h-12 text-center mb-3">
                      <a
                        id="optOut"
                        className="mb-3 px-4 py-2 md:py-3 text-sm md:text-base text-grey-700 transition-colors duration-150 border border-grey-300 rounded-lg cursor-pointer hover:text-blue-900"
                      >
                        Je ne souhaite pas être accompagné(e)
                      </a>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
            <br />
            <br />
          </li>
          <li className="mb-2">
            <div className="flex items-center mb-1 z-50">
              <div className="bg-gray-300 rounded-full h-8 w-8"></div>
              <div
                className="flex-1 ml-4 text-sm md:text-base font-normal text-gray-600"
              >
                Etape 3: Entrer en contact avec les agences recommandées
              </div>
            </div>

            <div className="ml-12 shadow-md rounded-xl bg-white ">
              <figure className="md:flex p-4 md:p-0 md:p-0">
                <div className="md:p-4 text-left space-y-4">
                  <div className="grid grid-cols-6 gap-1">
                    <div>
                      <img
                        className="md:p-4"
                        src="https://public.production.ui.sortlist.cloud/_next/static/images/get-introduced-89681f46499aae920fb7058f049b7fa1.svg"
                        width="400"
                        height="400"
                      />
                    </div>
                    <div className="col-start-1 col-span-5">
                      <div className="md:p-4 text-left space-y-4">
                        <p className="text-lg md:text-2xl font-bold text-grey-900 ">
                          Mise en relation avec les meilleures agences
                        </p>
                        <p className="text-base md:text-lg text-gray-700">
                          Après validation de votre demande,
                          nous vous mettrons en contact avec les agences les plus
                          adéquates pour votre projet.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
            <br />
            <br />
          </li>
        </ul>
        <div className="flex items-center">
          <div className="bg-gray-300 rounded-full h-8 w-8"></div>
          <div
            className="flex-1 ml-4 mb-2 text-sm md:text-base font-normal text-gray-600"
          >
            Etape 4: Une superbe collaboration commence
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center">
      <div className="relative max-w-screen-lg m-12 sm:m-12">
        <div className="ml-12 shadow-md rounded-xl bg-white ">
          <figure className="md:flex p-4 md:p-4 md:p-0">
            <div className="grid grid-cols-6 gap-4">
              <div>
                <img
                  src="https://sortlist-assets.gumlet.io/images/items/simple-process.png?format=auto"
                  width="400"
                  height="400"
                />
              </div>
              <div className="col-start-2 col-span-5">
                <div className="md:p-4 text-left space-y-4">
                  <p className="text-lg md:text-2xl font-bold text-grey-900 ">
                    Envie d'explorer les agences par vous-même ?
                  </p>
                  <p className="text-base md:text-lg text-gray-700">
                    Vous pouvez déjà explorer ces suggestions d'agences et voir
                    si certaines vous plaisent.
                  </p>
                  <br />
                  <a
                    id="searchLink"
                    className="h-10 px-5 py-2 md:py-3 text-sm md:text-base text-grey-700transition-colors duration-150 border border-grey-300 rounded-lg focus:shadow-outline hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                  >
                    Voir les agences suggérées
                  </a>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />

    </body>
  );
}
