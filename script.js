document.getElementById("cadastro-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const senhaRecuperacao = document.getElementById("senhaRecuperacao").value;
    const premium = document.getElementById("premium").value;
    const imagemPerfil = document.getElementById("imagemPerfil").value;

    const userData = {
        nome,
        email,
        senha,
        senhaRecuperacao,
        premium,
        imagemPerfil
    };

    try {
        const response = await fetch("https://back-spider.vercel.app/user/cadastrarUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Usuário cadastrado com sucesso!");
            window.location.href = "https://bueninkt.github.io/TelinhaL/";
        } else {
            alert("Erro ao cadastrar usuário: " + (data.message || "Verifique os dados e tente novamente."));
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Erro ao conectar com a API. Verifique sua conexão e tente novamente.");
    }
});