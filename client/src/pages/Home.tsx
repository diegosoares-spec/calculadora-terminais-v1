import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<any>(null);

  const calculateTerminals = () => {
    const num = parseInt(inputValue);

    if (isNaN(num) || num < 0 || num > 36) {
      alert("Por favor, digite um número entre 0 e 36");
      return;
    }

    const digits = String(num).padStart(2, "0").split("").map(Number);
    const d1 = digits[0];
    const d2 = digits[1];

    const terminalComum = num % 10;
    const camuflado_subtracao = Math.abs(d1 - d2);
    const camuflado_soma = (d1 + d2) % 10;

    let camuflados_especiais = null;
    if ([19, 28, 29].includes(num)) {
      const soma_digitos = d1 + d2;
      const soma_digits = String(soma_digitos).split("").map(Number);
      const especial_subtracao = Math.abs(soma_digits[0] - soma_digits[1]);
      const especial_soma = (soma_digits[0] + soma_digits[1]) % 10;

      camuflados_especiais = {
        subtracao: especial_subtracao,
        soma: especial_soma,
        explicacao: `${d1}+${d2}=${soma_digitos} → ${soma_digits[0]}+${soma_digits[1]}=${soma_digits[0] + soma_digits[1]}`,
      };
    }

    setResults({
      numero: num,
      terminalComum,
      camuflado_subtracao,
      camuflado_soma,
      d1,
      d2,
      camuflados_especiais,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      calculateTerminals();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-0 pb-16 px-4 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #121063 0%, #1a1a7f 50%, #0f0f4d 100%)" }}>
      {/* PARTÍCULAS ANIMADAS - AZUL E VERMELHO */}
      <style>{`
        @keyframes float1 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(30px, -50px); } }
        @keyframes float2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-40px, 60px); } }
        @keyframes float3 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(50px, 40px); } }
        @keyframes float4 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-30px, -60px); } }
        @keyframes float5 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(60px, -30px); } }
        @keyframes float6 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-50px, 50px); } }
        @keyframes float7 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(40px, 60px); } }
        @keyframes float8 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-60px, -40px); } }
        
        .particle-float { position: fixed; border-radius: 50%; pointer-events: none; z-index: 0; }
        .particle-red { background: radial-gradient(circle, rgba(234, 53, 59, 0.8), rgba(234, 53, 59, 0.2)); box-shadow: 0 0 30px rgba(234, 53, 59, 0.8), inset 0 0 20px rgba(234, 53, 59, 0.5); }
        .particle-blue { background: radial-gradient(circle, rgba(0, 212, 255, 0.8), rgba(0, 212, 255, 0.2)); box-shadow: 0 0 30px rgba(0, 212, 255, 0.8), inset 0 0 20px rgba(0, 212, 255, 0.5); }
        .p1 { animation: float1 8s ease-in-out infinite; }
        .p2 { animation: float2 10s ease-in-out infinite; }
        .p3 { animation: float3 12s ease-in-out infinite; }
        .p4 { animation: float4 9s ease-in-out infinite; }
        .p5 { animation: float5 11s ease-in-out infinite; }
        .p6 { animation: float6 13s ease-in-out infinite; }
        .p7 { animation: float7 10s ease-in-out infinite; }
        .p8 { animation: float8 12s ease-in-out infinite; }
      `}</style>
      
      {/* Partículas vermelhas */}
      <div className="particle-float particle-red p1" style={{ width: "60px", height: "60px", top: "10%", left: "5%" }}></div>
      <div className="particle-float particle-red p2" style={{ width: "80px", height: "80px", top: "30%", right: "10%" }}></div>
      <div className="particle-float particle-red p3" style={{ width: "50px", height: "50px", bottom: "20%", left: "8%" }}></div>
      <div className="particle-float particle-red p4" style={{ width: "70px", height: "70px", top: "60%", right: "5%" }}></div>
      
      {/* Partículas azuis */}
      <div className="particle-float particle-blue p5" style={{ width: "70px", height: "70px", top: "20%", left: "15%" }}></div>
      <div className="particle-float particle-blue p6" style={{ width: "90px", height: "90px", top: "50%", right: "20%" }}></div>
      <div className="particle-float particle-blue p7" style={{ width: "60px", height: "60px", bottom: "15%", right: "12%" }}></div>
      <div className="particle-float particle-blue p8" style={{ width: "80px", height: "80px", top: "70%", left: "10%" }}></div>
      {/* Logo no topo esquerdo */}
      <div className="absolute top-4 left-4 z-50">
        <img src="/images/caio-logo.png" alt="Caio Roleta" className="h-12 w-12 object-contain" />
      </div>
      {/* HERO SECTION - CAIO + HEADLINE EMBAIXO COLADO */}
      {/* Container para manter Caio e headline juntos */}
      <div className="w-full flex flex-col items-center" style={{ marginBottom: "0", marginTop: "0" }}>
        {/* Imagem do Caio com anel neon integrado */}
        <img
          src="/images/caio-hero.png"
          alt="Caio Roleta"
          className="max-w-md md:max-w-lg lg:max-w-2xl h-auto object-contain"
          style={{
            filter: "drop-shadow(0 0 20px rgba(0, 212, 255, 0.15))",
            display: "block",
            marginTop: "0",
            marginBottom: "-3.5rem",
          }}
        />

        {/* Headline 100% colado no Caio */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white text-center px-4"
          style={{
            textShadow:
              "0 0 25px rgba(234, 53, 59, 0.6), 0 0 50px rgba(234, 53, 59, 0.3), 2px 2px 6px rgba(0, 0, 0, 0.7)",
            lineHeight: "1.1",
            letterSpacing: "-0.03em",
            maxWidth: "100%",
            marginTop: "-3.5rem",
            marginBottom: "1rem",
          }}
        >
          Calculadora<br />
          de<br />
          Terminais
        </h1>
      </div>

      <p className="text-2xl md:text-3xl font-black text-white text-center px-4" style={{
        textShadow: "0 0 25px rgba(234, 53, 59, 0.6), 0 0 50px rgba(234, 53, 59, 0.3), 2px 2px 6px rgba(0, 0, 0, 0.7)",
        marginTop: "0",
        marginBottom: "0",
      }}>
        A <span style={{color: "#ea353b"}}>Única</span> Calculadora de Terminais do Brasil
      </p>



      {/* CARD CALCULADORA */}
      <div className="w-full max-w-md mb-12 px-4" style={{ marginTop: "0.5rem" }}>
        <div
          className="border-2 rounded-2xl p-8 bg-black/60 backdrop-blur-sm relative"
          style={{
            borderColor: "#ea353b",
            boxShadow: "0 0 20px rgba(234, 53, 59, 0.4), inset 0 0 20px rgba(234, 53, 59, 0.1)",
          }}
        >
          <img src="/images/caio-logo.png" alt="Caio" className="absolute top-3 right-3 h-8 w-8 object-contain opacity-70" />
          <h2 className="text-white font-bold text-lg mb-2">Digite um número</h2>
          <p className="text-gray-400 text-sm mb-6">Escolha um número de 0 a 36</p>

          <input
            type="number"
            placeholder="Ex: 29"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full px-4 py-3 mb-4 bg-black border-2 rounded-lg text-white placeholder-gray-500 focus:outline-none"
            style={{
              borderColor: "#ea353b",
              boxShadow: "0 0 10px rgba(234, 53, 59, 0.3)",
            }}
          />

          <Button
            onClick={calculateTerminals}
            className="w-full py-3 rounded-lg font-bold text-white border-2"
            style={{
              background: "linear-gradient(135deg, #000000 0%, #ea353b 100%)",
              borderColor: "#ea353b",
            }}
          >
            Calcular Terminais
          </Button>
        </div>
      </div>

      {/* RESULTADOS */}
      {results && (
        <div className="w-full max-w-2xl space-y-6 px-4">
          {/* Terminal Comum */}
          <div
            className="border-2 rounded-2xl p-12 bg-black/60 backdrop-blur-sm text-center relative"
            style={{
              borderColor: "#ea353b",
              boxShadow: "0 0 20px rgba(234, 53, 59, 0.4)",
            }}
          >
            <img src="/images/caio-logo.png" alt="Caio" className="absolute top-3 right-3 h-8 w-8 object-contain opacity-70" />
            <h3 className="text-red-400 font-bold mb-6 text-lg">Terminal Comum</h3>
            <div
              className="text-8xl font-black mb-4"
              style={{
                color: "#ffffff",
                textShadow: "0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.5), 0 0 90px rgba(255, 255, 255, 0.3)",
              }}
            >
              {results.terminalComum}
            </div>
            <p className="text-gray-400 text-sm">Último dígito de {results.numero}</p>
          </div>

          {/* Camuflados Normais */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="border-2 rounded-2xl p-8 bg-black/60 backdrop-blur-sm text-center relative"
              style={{
                borderColor: "#ea353b",
                boxShadow: "0 0 15px rgba(234, 53, 59, 0.3)",
              }}
            >
              <img src="/images/caio-logo.png" alt="Caio" className="absolute top-2 right-2 h-6 w-6 object-contain opacity-70" />
              <h3 className="text-red-400 font-bold mb-4">Camuflado (Subtração)</h3>
              <div
                className="text-6xl font-black mb-3"
                style={{
                  color: "#ffffff",
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.3)",
                }}
              >
                {results.camuflado_subtracao}
              </div>
              <p className="text-gray-400 text-xs">|{results.d1}−{results.d2}|={results.camuflado_subtracao}</p>
            </div>

            <div
              className="border-2 rounded-2xl p-8 bg-black/60 backdrop-blur-sm text-center relative"
              style={{
                borderColor: "#ea353b",
                boxShadow: "0 0 15px rgba(234, 53, 59, 0.3)",
              }}
            >
              <img src="/images/caio-logo.png" alt="Caio" className="absolute top-2 right-2 h-6 w-6 object-contain opacity-70" />
              <h3 className="text-red-400 font-bold mb-4">Camuflado (Soma)</h3>
              <div
                className="text-6xl font-black mb-3"
                style={{
                  color: "#ffffff",
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.3)",
                }}
              >
                {results.camuflado_soma}
              </div>
              <p className="text-gray-400 text-xs">{results.d1}+{results.d2}={results.d1 + results.d2} → {results.camuflado_soma}</p>
            </div>
          </div>

          {/* Camuflados Especiais */}
          {results.camuflados_especiais && (
            <div
              className="border-l-4 rounded-lg pl-6 py-6 bg-black/60 backdrop-blur-sm relative"
              style={{
                borderLeftColor: "#ea353b",
              }}
            >
              <img src="/images/caio-logo.png" alt="Caio" className="absolute top-3 right-3 h-8 w-8 object-contain opacity-70" />
              <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                <span>🔄</span>
                <span>
                  Camuflados <span className="text-red-400">Especiais</span>
                </span>
              </h3>
              <p className="text-gray-300 text-sm mb-6">O número pode representar os terminais abaixo.</p>

              <div className="grid grid-cols-2 gap-4">
                  <div
                    className="border-2 rounded-xl p-6 bg-black/80 text-center relative"
                    style={{
                      borderColor: "#ea353b",
                      boxShadow: "0 0 10px rgba(234, 53, 59, 0.2)",
                    }}
                  >
                    <img src="/images/caio-logo.png" alt="Caio" className="absolute top-2 right-2 h-5 w-5 object-contain opacity-70" />
                    <p className="text-red-400 font-bold mb-3">Subtração</p>
                  <div
                    className="text-5xl font-black mb-2"
                    style={{
                      color: "#ffffff",
                      textShadow: "0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.5), 0 0 45px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {results.camuflados_especiais.subtracao}
                  </div>
                  <p className="text-gray-400 text-xs">{results.camuflados_especiais.explicacao.split(" → ")[0]}</p>
                </div>

                  <div
                    className="border-2 rounded-xl p-6 bg-black/80 text-center relative"
                    style={{
                      borderColor: "#ea353b",
                      boxShadow: "0 0 10px rgba(234, 53, 59, 0.2)",
                    }}
                  >
                    <img src="/images/caio-logo.png" alt="Caio" className="absolute top-2 right-2 h-5 w-5 object-contain opacity-70" />
                    <p className="text-red-400 font-bold mb-3">Soma</p>
                  <div
                    className="text-5xl font-black mb-2"
                    style={{
                      color: "#ffffff",
                      textShadow: "0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.5), 0 0 45px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {results.camuflados_especiais.soma}
                  </div>
                  <p className="text-gray-400 text-xs">{results.camuflados_especiais.explicacao.split(" → ")[1]}</p>
                </div>
              </div>
            </div>
          )}

          {/* Como Funciona */}
          <div
            className="border-2 rounded-2xl p-8 bg-black/60 backdrop-blur-sm relative"
            style={{
              borderColor: "#ea353b",
              boxShadow: "0 0 15px rgba(234, 53, 59, 0.2)",
            }}
          >
            <img src="/images/caio-logo.png" alt="Caio" className="absolute top-3 right-3 h-8 w-8 object-contain opacity-70" />
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <span>📚</span> Como funciona
            </h3>
            <div className="space-y-4 text-sm text-gray-300">
              <p>
                <span className="text-red-400 font-bold">Terminal Comum:</span> O número que termina.
              </p>
              <p>
                <span className="text-red-400 font-bold">Terminal Camuflado por Subtração:</span> Subtração entre os dois dígitos do número.
              </p>
              <p>
                <span className="text-red-400 font-bold">Terminal Camuflado por Soma:</span> Soma entre os dois dígitos do número.
              </p>
              <p className="pt-4 border-t border-gray-600 mt-4">
                <span className="text-yellow-400 font-bold">⚠️ Camuflado Especial (19 / 28 / 29):</span> Esse camuflado só pode acontecer com os números 19, 28 e 29.
              </p>
              <p>
                <span className="text-red-400 font-bold">Explicação:</span> São os terminais das somas dos dígitos.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="text-center mt-8 px-4 space-y-6">
        <img 
          src="/images/caio-logo-full.png" 
          alt="Caio Roleta" 
          className="h-40 w-auto mx-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
          style={{
            filter: "drop-shadow(0 0 20px rgba(234, 53, 59, 0.4)) drop-shadow(0 0 40px rgba(234, 53, 59, 0.2))",
          }}
        />
        <p className="text-gray-400 text-sm">
          Calculadora desenvolvida para o método do Caio
        </p>
      </div>
    </div>
  );
}
