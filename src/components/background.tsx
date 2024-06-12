export default function BackgroundImage() {
  return (
    <>
      <div className="fixed -z-50 h-full w-full bg-image-pref bg-cover bg-center bg-no-repeat" />
      <div className="fixed -z-40 h-screen w-full bg-black/70" />
      <div className=" container flex  min-h-screen flex-col justify-center space-y-10 pb-20 text-center text-white md:w-2/3 md:text-start">
        <h1 className="text-5xl font-light md:text-6xl">Bem-vindo!</h1>
        <h2 className="text-xl font-extralight">
          O Fundo de Previdência dos Servidores do Município de Aparecida de
          Goiânia – APARECIDAPREV, autarquia municipal, com personalidade
          jurídica de direito público interno, criada em 20 de junho de 2005,
          pela Lei Complementar nº 010, tem como função à gestão administrativa,
          jurídica e financeira do Regime Próprio de Previdência Social de
          Aparecida de Goiânia, cujo objetivo é assegurar aos servidores
          titulares de cargos efetivos, meios de subsistência nos eventos de
          invalidez, doença, acidente em serviço, idade avançada, reclusão e
          morte; e proteção à maternidade e à família.
        </h2>
      </div>
    </>
  );
}
