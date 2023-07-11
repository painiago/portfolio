import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./curriculo.scss";

export default function Curriculo() {
  const handleDownload = () => {
    window.open("/curriculo.pdf", "_blank");
  };

  return (
    <div className="ContainerCurriculo">
      <div className="ContentCurriculo">  
        <p>+ Experiências Profissionais</p>
        <button onClick={handleDownload} className="rise">
          <FontAwesomeIcon icon={faDownload} />
          Baixar currículo
        </button> 
      </div>
    </div>
  );
}
