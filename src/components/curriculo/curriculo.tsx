import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./curriculo.scss";

const curriculoPDFUrl = "https://drive.google.com/file/d/1_cz3Cyh4H8wZ3osttlkWnneKCLnl0_IN/view?usp=drive_link";

export default function Curriculo() {
  const handleDownload = () => {
    window.open(curriculoPDFUrl, "_blank");
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
