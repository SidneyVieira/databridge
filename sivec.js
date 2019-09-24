const puppeteer = require('puppeteer')
// Validação do Browser antes de abrí-lo
void(async() => {

			try {
				const browser = await puppeteer.launch({
					headless: false,
					ignoreHTTPSErrors: true,
					slowMo: 10
				})
				// Abrindo o Navegador
				const page = await browser.newPage();

				// Acesso ao Portal MPSP
				var signin = 'body > div > form > button';

				await page.goto('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/login');
				await page.type('#username', 'fiap');
				await page.type('#password', 'mpsp');
				await page.click(signin);

				// Acesso ao portal Siel

				await page.goto('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/sivec/login.html');

				var inputLoginSiel = '#nomeusuario';
				await page.type(inputLoginSiel, 'fiap');

				var inputSenhaSiel = '#senhausuario';
                await page.type(inputSenhaSiel, 'mpsp');

                var acessoPortal = ('#Acessar');
                await page.click(acessoPortal);

                var pesquisa = '#navbar-collapse-1 > ul > li:nth-child(4) > a';
                await page.waitForSelector(pesquisa);
                await page.click(pesquisa);

                var porReu = '#navbar-collapse-1 > ul > li.dropdown.open > ul > li.dropdown-submenu';
                await page.waitForSelector(porReu);
                await page.click(porReu);

                var pesquisaRG = '#navbar-collapse-1 > ul > li.dropdown.open > ul > li.dropdown-submenu.open > ul > li:nth-child(1) > a';
                await page.waitForSelector(pesquisaRG);
                await page.click(pesquisaRG);
                //var pesquisaNome = '#navbar-collapse-1 > ul > li.dropdown.open > ul > li.dropdown-submenu.open > ul > li:nth-child(2) > a';
                //var pesquisaMatricula = '#navbar-collapse-1 > ul > li.dropdown.open > ul > li.dropdown-submenu.open > ul > li:nth-child(3) > a';

                    var informeRG = '#idValorPesq';
                    await page.waitForSelector(informeRG);
                    await page.type(informeRG, '1157644');
                    
                    var botaoPesquisar = '#procurar';
                    await page.click(botaoPesquisar);

                    var acessarRG = '#tabelaPesquisa > tbody > tr:nth-child(1) > td.textotab1.text-center.sorting_1 > a';
                    await page.waitForSelector(acessarRG);
                    await page.click(acessarRG);

                    await page.waitForSelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-11 > table > tbody > tr:nth-child(1) > td:nth-child(2) > span');
                    var data = await page.evaluate(() => {

                        var replaceEspaco = function (string) {
                            return string.replace(/\t/g, '').replace(/\n/g, '');
                        }

                        var dadosEleitorRG = {
                            geral: {
                                nome: replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-11 > table > tbody > tr:nth-child(1) > td:nth-child(2) > span').innerHTML),
                                dataNascimento:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-11 > table > tbody > tr:nth-child(2) > td:nth-child(2) > span').innerHTML),
                                numeroControleVEC:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-11 > table > tbody > tr:nth-child(3) > td:nth-child(2) > span').innerHTML),
                                sexo:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-11 > table > tbody > tr:nth-child(1) > td:nth-child(5) > span').innerHTML),
                                rg:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-11 > table > tbody > tr:nth-child(2) > td:nth-child(5) > span').innerHTML),
                                tipoRG:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-11 > table > tbody > tr:nth-child(3) > td:nth-child(5) > span').innerHTML),
                                dataEmissaoRG:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(1) > td:nth-child(2) > span').innerHTML),
                                estadoCivil:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(2) > td:nth-child(2) > span').innerHTML),
                                naturalizadoSN:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(3) > td:nth-child(2) > span').innerHTML),
                                grauInstrucao:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(4) > td:nth-child(2) > span').innerHTML),
                                nomePai:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(5) > td:nth-child(2) > span').innerHTML),
                                nomeMae:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(6) > td:nth-child(2) > span').innerHTML),
                                corPele:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(7) > td:nth-child(2) > span').innerHTML),
                                alcunha:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(1) > td:nth-child(5) > span').innerHTML),
                                naturalidade:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(2) > td:nth-child(5) > span').innerHTML),
                                postoIdentificacao:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(2) > td:nth-child(5) > span').innerHTML),
                                formulaFundamental:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(4) > td:nth-child(5) > span').innerHTML),
                                corOlhos:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(5) > td:nth-child(5) > span').innerHTML),
                                cabelo:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(6) > td:nth-child(5) > span').innerHTML),
                                profissao:  replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(5) > div.col-md-12.top-buffer25 > table > tbody > tr:nth-child(7) > td:nth-child(5) > span').innerHTML),
                                //Informações adicionais do cadastro
                                residencial: replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(7) > div.col-md-7 > span').innerHTML),
                                trabalho: replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(8) > div.col-md-7 > span').innerHTML),
                                nomeAdicional: replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(10) > div.col-md-9 > span').innerHTML),
                                rgAdicional: replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(11) > div:nth-child(2) > span').innerHTML),
                                dataNascimentoAdicional: replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(12) > div.col-md-5 > span').innerHTML),
                                naturalidadeAdicional: replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(13) > div.col-md-7 > span').innerHTML),
                                nomePaiAdicional: replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(14) > div.col-md-9 > span').innerHTML),
                                NomeMãeAdicional: replaceEspaco(document.querySelector('body > form:nth-child(13) > div > div:nth-child(15) > div.col-md-9 > span').innerHTML)
                                
                       
                            }
                        }
                
            return dadosEleitorRG;
        });
    console.log(data)
        await browser.close();

    }catch (error) {
        console.log(error)
    }
})()