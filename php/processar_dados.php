<?php

// Pegando os dados do formulário
$nome = $_POST["forms-nome"];
$sobrenome = $_POST["forms-sobrenome"];
$telefone = $_POST["forms-fone"];
$email = $_POST["forms-email"];
$cep = $_POST["forms-cep"];
$endereco = $_POST["forms-endereco"];
$bairro = $_POST["forms-bairro"];
$genero = $_POST["forms-genero"];
$estado_civil = $_POST["forms-estadocivil"];
$data_nascimento = $_POST["forms-datanasc"];
$comentario = $_POST["forms-comentario"];
$data_atual = date('d/m/Y');
$hora_atual = date('H:i:s');

// Configurações de credenciais
$server = 'localhost';
$usuario = 'root';
$senha = '';
$banco = 'cadastro_dizimista';

$conn = new mysqli($server, $usuario, $senha, $banco);

// Verificando a conexão
if ($conn->connect_error) {
    die("Falha ao se comunicar com o Banco de Dados: " . $conn->connect_error);
}

// Query SQL para inserir os dados
$sql = "INSERT INTO dizimistas (nome, sobrenome, telefone, email, cep, endereco, bairro, genero, estado_civil, data_nascimento, comentario, data_atual, hora_atual) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

// Preparar a query
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssssssssss", $nome, $sobrenome, $telefone, $email, $cep, $endereco, $bairro, $genero, $estado_civil, $data_nascimento, $comentario, $data_atual, $hora_atual);

// Executar e verificar se deu certo
if ($stmt->execute()) {
    echo "Cadastro feito com sucesso!";
} else {
    echo "Erro no cadastro: " . $stmt->error;
}

// Fechar conexões
$stmt->close();
$conn->close();
?>
