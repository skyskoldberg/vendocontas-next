import json, base64, urllib.request, urllib.error, os

GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN")
GITHUB_REPO  = "skyskoldberg/vendocontas-next"
BRANCH       = "main"

def gh_headers():
    return {
        "Authorization": f"token {GITHUB_TOKEN}",
        "Accept": "application/vnd.github.v3+json",
        "Content-Type": "application/json",
        "User-Agent": "vendocontas-seo"
    }

def gh_sha(path):
    try:
        url = f"https://api.github.com/repos/{GITHUB_REPO}/contents/{path}"
        req = urllib.request.Request(url, headers=gh_headers())
        with urllib.request.urlopen(req) as r:
            return json.loads(r.read())["sha"]
    except:
        return None

def gh_put(path, content, msg):
    url = f"https://api.github.com/repos/{GITHUB_REPO}/contents/{path}"
    sha = gh_sha(path)
    body = {"message": msg, "branch": BRANCH,
            "content": base64.b64encode(content.encode()).decode()}
    if sha:
        body["sha"] = sha
    req = urllib.request.Request(url, data=json.dumps(body).encode(),
                                  headers=gh_headers(), method="PUT")
    try:
        with urllib.request.urlopen(req) as r:
            print("OK publicado!")
            return True
    except urllib.error.HTTPError as e:
        print(f"ERRO: {e.read().decode()[:200]}")
        return False

page_content = """export default function PoliticaDevolucao() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px", fontFamily: "sans-serif", lineHeight: 1.7 }}>
      <h1>Politica de Devolucao</h1>
      <h2>Produtos Digitais</h2>
      <p>O VendoContas.com comercializa exclusivamente produtos digitais. Nao aceitamos devolucoes.</p>
      <h2>Garantia de 7 dias</h2>
      <ul>
        <li>Conta nao corresponde a descricao</li>
        <li>Impossibilidade de acesso apos entrega</li>
        <li>Conta suspensa antes da transferencia</li>
      </ul>
      <h2>Contato</h2>
      <p>Email: suporte@vendocontas.com</p>
    </main>
  )
}
"""

gh_put("app/politica-de-devolucao/page.tsx", page_content, "feat: pagina politica de devolucao")