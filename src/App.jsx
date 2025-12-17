import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Cristiano Ronaldo</h1>
        <p>
          Pregled života, karijere i naslijeđa jednog od najpoznatijih nogometaša svijeta.
        </p>
      </header>

      <main>
        <section className="card" >
          <h2>Tko je Cristiano Ronaldo?</h2>

          <p>
            Cristiano Ronaldo dos Santos Aveiro (rođen 5. veljače 1985.) je portugalski
            nogometaš poznat po svojoj izvanrednoj karijeri, atletskoj spremi i
            golgeterskim sposobnostima.
          </p>
          <p>
            Igrao je za klubove poput Sportinga, Manchester Uniteda, Real Madrida i
            Juventusa te je dugo godina bio ključna figura u reprezentaciji Portugala.
          </p>
        </section>

        <section className="card">
          <h2>Rani život i karijera</h2>
          <ul>
            <li>
              <strong>Rani počeci</strong> – odrastao na Madeiri, rano je pokazao
              talent i priključen je akademiji Sportinga.
            </li>
            <li>
              <strong>Uspon</strong> – kroz Manchester United i Real Madrid postao
              je jedan od najuspješnijih igrača svoje generacije.
            </li>
            <li>
              <strong>Reprezentacija</strong> – kapetan Portugala, osvajač Eura 2016.
            </li>
          </ul>
        </section>

        <section className="card">
          <h2>Karakteristike i stil igre</h2>
          <ul>
            <li>
              <strong>Fizička sprema</strong> – brzina, snaga i preciznost u skoku.
            </li>
            <li>
              <strong>Tehnika</strong> – preciznost udarca, slobodni udarci i dribling.
            </li>
            <li>
              <strong>Golgeterski instinkt</strong> – sposobnost postizanja važnih golova.
            </li>
          </ul>
        </section>

        <section className="card">
          <h2>Najvažnija dostignuća</h2>
          <p>
            Ronaldo je višestruki osvajač individualnih nagrada poput Ballon d'Or,
            rekorder po broju službenih pogodaka za klubove i reprezentaciju i
            jedan od najprepoznatljivijih sportaša globalno.
          </p>
          <p>
            Osim sportskog uspjeha, poznat je i po filantropskim aktivnostima te
            velikom komercijalnom utjecaju izvan nogometnog terena.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
