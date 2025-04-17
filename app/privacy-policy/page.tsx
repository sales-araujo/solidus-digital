import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidade | Solidus Digital",
  description: "Política de Privacidade da Solidus Digital - Especialista em desenvolvimento VTEX",
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-background py-12 md:py-20">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para a página inicial
          </Link>
        </div>

        <div className="flex items-center mb-8">
          <Shield className="h-8 w-8 text-primary mr-3" />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Política de Privacidade</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground text-lg mb-8">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introdução</h2>
              <p className="text-muted-foreground">
                A Solidus Digital ("nós", "nossos" ou "empresa") está comprometida em proteger sua privacidade. Esta
                Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando
                você visita nosso site solidusdigital.com.br (o "Site") ou utiliza nossos serviços.
              </p>
              <p className="text-muted-foreground mt-4">
                Ao utilizar nosso Site, você concorda com a coleta e uso de informações de acordo com esta política. Se
                você não concordar com qualquer parte desta política, por favor, não utilize nosso Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Informações que Coletamos</h2>
              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">2.1 Informações Pessoais</h3>
              <p className="text-muted-foreground">
                Podemos coletar informações pessoais que você nos fornece diretamente, como:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                <li>Nome</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone</li>
                <li>Informações sobre sua empresa</li>
                <li>Detalhes do projeto que você deseja desenvolver</li>
                <li>Qualquer outra informação que você optar por nos fornecer</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">2.2 Informações de Uso</h3>
              <p className="text-muted-foreground">
                Também coletamos informações sobre como você acessa e usa nosso Site, incluindo:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                <li>Endereço IP</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Páginas visualizadas</li>
                <li>Tempo gasto no Site</li>
                <li>Links clicados</li>
                <li>Páginas de referência</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Cookies e Tecnologias Semelhantes</h2>
              <p className="text-muted-foreground">
                Nosso Site utiliza cookies e tecnologias semelhantes para melhorar sua experiência, analisar o uso do
                Site e personalizar conteúdo.
              </p>

              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">3.1 Tipos de Cookies que Utilizamos</h3>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Cookies Essenciais:</strong> Necessários para o funcionamento
                  básico do Site.
                </li>
                <li>
                  <strong className="text-foreground">Cookies Analíticos:</strong> Ajudam-nos a entender como os
                  visitantes interagem com o Site.
                </li>
                <li>
                  <strong className="text-foreground">Cookies de Preferências:</strong> Permitem que o Site lembre suas
                  escolhas e preferências.
                </li>
                <li>
                  <strong className="text-foreground">Cookies de Marketing:</strong> Utilizados para rastrear visitantes
                  em websites e exibir anúncios relevantes.
                </li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mt-6 mb-3">3.2 Controle de Cookies</h3>
              <p className="text-muted-foreground">
                Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies já
                presentes em seu computador e configurar a maioria dos navegadores para impedir que sejam adicionados.
                No entanto, isso pode impedir que você utilize determinadas funcionalidades do Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Como Utilizamos Suas Informações</h2>
              <p className="text-muted-foreground">Utilizamos as informações coletadas para:</p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                <li>Fornecer, manter e melhorar nosso Site e serviços</li>
                <li>Processar e responder às suas solicitações, perguntas e comentários</li>
                <li>Enviar informações técnicas, atualizações e mensagens administrativas</li>
                <li>
                  Enviar comunicações de marketing, como newsletters e informações sobre nossos serviços (você pode
                  optar por não receber essas comunicações)
                </li>
                <li>Analisar tendências de uso e melhorar a experiência do usuário</li>
                <li>Detectar, prevenir e resolver problemas técnicos e de segurança</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Compartilhamento de Informações</h2>
              <p className="text-muted-foreground">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas seguintes
                circunstâncias:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Prestadores de Serviços:</strong> Podemos compartilhar suas
                  informações com empresas terceirizadas que nos auxiliam na operação do Site e na prestação de
                  serviços.
                </li>
                <li>
                  <strong className="text-foreground">Conformidade Legal:</strong> Podemos divulgar suas informações
                  quando acreditarmos, de boa-fé, que a divulgação é necessária para cumprir uma obrigação legal,
                  proteger nossos direitos, proteger sua segurança ou a segurança de outros, investigar fraudes ou
                  responder a uma solicitação governamental.
                </li>
                <li>
                  <strong className="text-foreground">Transferência de Negócios:</strong> Se a Solidus Digital estiver
                  envolvida em uma fusão, aquisição ou venda de ativos, suas informações pessoais podem ser transferidas
                  como parte desse processo. Notificaremos você antes que suas informações pessoais sejam transferidas e
                  se tornem sujeitas a uma política de privacidade diferente.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Seus Direitos</h2>
              <p className="text-muted-foreground">
                De acordo com a Lei Geral de Proteção de Dados (LGPD) e outras leis de proteção de dados aplicáveis,
                você tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                <li>Direito de acesso às suas informações pessoais</li>
                <li>Direito de retificação de dados incompletos, inexatos ou desatualizados</li>
                <li>Direito de exclusão dos dados tratados com seu consentimento</li>
                <li>Direito de portabilidade dos dados a outro fornecedor de serviço</li>
                <li>Direito de informação sobre o compartilhamento de seus dados</li>
                <li>Direito de revogar o consentimento a qualquer momento</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Para exercer qualquer um desses direitos, entre em contato conosco através dos dados fornecidos na seção
                "Contato" desta política.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Segurança de Dados</h2>
              <p className="text-muted-foreground">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações
                pessoais contra perda acidental, uso indevido, acesso não autorizado, alteração e divulgação. No
                entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro,
                e não podemos garantir sua segurança absoluta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Retenção de Dados</h2>
              <p className="text-muted-foreground">
                Mantemos suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta
                Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por
                lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Menores de Idade</h2>
              <p className="text-muted-foreground">
                Nosso Site não se destina a menores de 18 anos e não coletamos intencionalmente informações pessoais de
                crianças. Se você é pai ou responsável e acredita que seu filho nos forneceu informações pessoais, entre
                em contato conosco para que possamos tomar as medidas necessárias.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Alterações nesta Política</h2>
              <p className="text-muted-foreground">
                Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer
                alterações publicando a nova Política de Privacidade nesta página e atualizando a data de "última
                atualização" no topo. Recomendamos que você revise esta Política de Privacidade periodicamente para
                quaisquer alterações.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
