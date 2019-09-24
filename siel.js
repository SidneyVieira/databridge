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

				await page.goto('http://ec2-18-231-116-58.sa-east-1.compute.amazonaws.com/siel/login.html');

				var inputLoginSiel = 'body > div.canvas > div.conteudo > div.mioloInterna.apps > form > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]';

				await page.waitForSelector(inputLoginSiel);
				await page.type(inputLoginSiel, 'fiap');

				var inputSenhaSiel = 'body > div.canvas > div.conteudo > div.mioloInterna.apps > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=password]';
				await page.type(inputSenhaSiel, 'mpsp');
				
				var botaoPortalEnviar = 'body > div.canvas > div.conteudo > div.mioloInterna.apps > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=submit]';
				await page.click(botaoPortalEnviar);

				// Inserindo os valores no Portal
				var inputNome = 'body > div.canvas > div.conteudo > div.mioloInterna.apps > form.formulario > fieldset:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type="text"]';
				await page.waitForSelector(inputNome);
				await page.type(inputNome, 'Klaus');

				var inputNumeroProcesso = '#num_processo';
				await page.type(inputNumeroProcesso, '369132300116');
				
				var botaoEnviarDados = ('body > div.canvas > div.conteudo > div.mioloInterna.apps > form.formulario > table > tbody > tr > td:nth-child(2) > input');
				await page.click(botaoEnviarDados);

				await page.waitForSelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(2) > td:nth-child(2)');

				var data = await page.evaluate(() => {

							var dadosEleitor = {
								geral: {
									nome: document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(2) > td:nth-child(2)').innerHTML,
									titulo: document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(3) > td:nth-child(2)').innerHTML,
									dataNasc: document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(4) > td:nth-child(2)').innerHTML,
									zona: document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(5) > td:nth-child(2)').innerHTML,
									endereco: document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(6) > td:nth-child(2)').innerHTML,
									municipio: document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(7) > td:nth-child(2)').innerHTML,
									uf: document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(8) > td:nth-child(2)').innerHTML,
									data_domicilio: document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(9) > td:nth-child(2)').innerHTML,
									nome_pai: document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(10) > td:nth-child(2)').innerHTML,
									nome_mae:  document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(11) > td:nth-child(2)').innerHTML,
									naturalidade: document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(12) > td:nth-child(2)').innerHTML,
									cod_validacao: document.querySelector('body > div.canvas > div.conteudo > div.mioloInterna.apps > table > tbody > tr:nth-child(13) > td:nth-child(2)').innerHTML
																		
								}
							}
							return dadosEleitor;

                        }); 
                        console.log(data)
                        await browser.close();
                
				}catch (error) {
					console.log(error)
				}
            })()