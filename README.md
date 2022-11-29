<h1>Automação de testes de API com Cypress</h1>


### Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

<br>
<a href="https://docs.pytest.org/en/7.1.x/index.html">
    <img src="https://img.shields.io/static/v1?label=Pytest&message=V7.1.3&color=blue&style=for-the-badge&logo=pytest"/>
</a>
<br>
<a href="https://pypi.org/project/pytest-cov/">
    <img src="https://img.shields.io/static/v1?label=Pytest-cov&message=V4.0.0&color=blue&style=for-the-badge&logo=pytest"/>
</a>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

<br>
<a href="https://git-scm.com/downloads">
    <img src="https://img.shields.io/static/v1?label=Git&message=V2.x.x&color=critical&style=for-the-badge&logo=git"/>
</a>
<br>
<a href="https://www.python.org/">
    <img src="https://img.shields.io/static/v1?label=Python&message=V3.x.x&color=yellow&style=for-the-badge&logo=python&logoColor=yellow&labelColor=blue"/>
</a>
<br>
<a href="https://www.jetbrains.com/pt-br/pycharm/download/#section=windows">
    <img src="https://img.shields.io/static/v1?label=PyCharm&message=V3.x.x&color=yellow&style=for-the-badge&logo=pycharm&logoColor=green&labelColor=black"/>
</a>
<br>

### Instalando dependências e rodando os testes.

```bash
# Clone este repositório
$ git clone https://bitbucket.getnet.com.br/scm/hom/poc-unit-test-pytest.git

# Acesse a pasta do projeto no terminal/cmd e carregue o projeto no PyCharm;
$ cd poc-unit-test-pytest

# Dentro da IDE abra o terminal e instale as dependências com o comando abaixo:
$ pip install -r requirements.txt

# Após instalar as dependências, você pode rodar os testes com o seguinte comando:
$ pytest

# ATENÇÃO
# Em alguns casos é necessário reiniciar o computador para que o comando pytest seja reconhecido.

# Os testes vão começar a rodar e os dados serão exibidos no terminal da IDE
# Após finalizar os testes será criada uma pastas com o nome:
$ unit_test_coverage_report

# Dentro dela teremos o arquivo index.html que foi gerado após a execução dos testes.
# Esse arquivo é um relatório de cobertura de testes, que nos demonstra o quanto nosso código está coberto por testes unitários
$ index.html


```
***

![Print do resultado dos testes](readme-assets/test_results.png)

***
### Documentação da equipe de TI Qualidade sobre Pytest


<br>
<a href="https://confluence.getnet.com.br:8444/pages/viewpage.action?pageId=532087950">
    <img src="https://img.shields.io/static/v1?label=Documenta%C3%A7%C3%A3o%20Pytest%20TI%20Qualidade&message=V1.0.0&color=grey&style=for-the-badge&logo=confluence&logoColor=white&labelColor=blue"/>
</a>
<br>