export default function TechnicalAnalysis({ id = "VC-AUDIT" }) {
  const wa = "https://wa.me/5583999691629?text=Quero a auditoria técnica da conta id " + id;
  return (
    <div className="my-20 bg-slate-900 text-white p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
      </div>
      <h3 className="font-serif text-3xl font-bold mb-8">Protocolo de Pré-Análise <span className="text-emerald-500">#{id}</span></h3>
      <div className="space-y-6 text-sm text-slate-300 max-w-xl">
        <p className="border-l-2 border-emerald-500 pl-4"><strong>Risco Algorítmico:</strong> Detectamos oscilações latentes nos metadados de backend. O alcance público pode estar sofrendo supressão não declarada.</p>
        <p className="border-l-2 border-emerald-500 pl-4"><strong>Cadeia de Posse:</strong> Verificação de Original Email (OGE) apresenta pontos cegos. Risco de recuperação futura requer validação manual.</p>
      </div>
      <p className="mt-10 text-[10px] uppercase tracking-widest text-slate-500 font-bold">A análise completa não é pública por segurança. O acesso aos dados reais exige auditoria direta.</p>
      <a href={wa} className="mt-8 inline-block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs py-6 uppercase tracking-[0.4em] transition-all">Liberar Auditoria Completa no WhatsApp</a>
    </div>
  );
}
