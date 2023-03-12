import "./foto-kutu.css";

function FotoKutu(ozellikler) {
  return (
    <div className="foto-kutu">
      <img src={ozellikler.url} alt="" />
      <h2>{ozellikler.sahibi}</h2>
      <button>Paylaş</button>
      <button>Beğen</button>
    </div>
  );
}

export default FotoKutu;
