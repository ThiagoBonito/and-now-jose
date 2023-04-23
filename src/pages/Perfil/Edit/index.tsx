import { ArrowLeft, Check, Eye, EyeSlash, Image, Trash } from "phosphor-react";
import { EditContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export const Edit = () => {
  const navigate = useNavigate();

  const storedEmail = localStorage.getItem("userEmail");
  const storedFullName = localStorage.getItem("userFullName");
  const storedPhoto = localStorage.getItem("userPhoto");

  const [files, setFiles] = useState(storedPhoto ?? "");

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    disabled: files?.length > 0,
  });

  const [name, setName] = useState(storedFullName);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const toggleShowPassword = (input: string) => {
    if (input === "old") {
      setShowOldPassword((prev) => !prev);
    } else {
      setShowNewPassword((prev) => !prev);
    }
  };

  const handleSaveChangesDisabled = () => {
    if (name === "" || oldPassword === "" || newPassword === "") {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (!files) {
      setFiles(acceptedFiles?.length > 0 ? acceptedFiles[0].name : "");
    }
  }, [acceptedFiles]);

  return (
    <EditContainer>
      <div className="backPage">
        <button className="button" onClick={() => navigate("/Perfil")}>
          <ArrowLeft size={16} color="#17191C" weight="bold" />
          <p>Voltar</p>
        </button>
      </div>

      <div className="contentEdit">
        <div className="header">
          <div>
            <h5>Perfil</h5>
            <h2>Edição de Perfil</h2>
          </div>
          <button disabled={handleSaveChangesDisabled()}>
            <Check size={32} />
            Salvar Alterações
          </button>
        </div>
        <div className="content">
          <div className="photos">
            <h3>Foto do Perfil</h3>
            <div className="controlButtons">
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} disabled={files?.length > 0} />
                <div className="button">
                  <Image size={24} />
                  {files?.length > 0 ? `${files}` : "Adicionar Foto"}
                </div>
              </div>
              <button className="removePhoto" onClick={() => setFiles("")}>
                <Trash size={24} />
                Remover Foto
              </button>
            </div>
          </div>
          <div className="infos">
            <h3>Nome Completo</h3>
            <input
              type="text"
              className="simpleInput"
              value={name ?? ""}
              onChange={(e) => setName(e.target.value)}
            />
            <h3>Email</h3>
            <input
              type="email"
              className="simpleInput"
              value={storedEmail ?? ""}
              disabled={true}
            />
            <h3>Senha</h3>
            <h4>Senha Atual</h4>
            <div className="passwordContainer">
              <input
                type={showOldPassword ? "text" : "password"}
                className="passwordInput"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <span
                className="passwordIcon"
                onClick={() => toggleShowPassword("old")}
              >
                {showOldPassword ? <EyeSlash size={24} /> : <Eye size={24} />}
              </span>
            </div>
            <h4>Nova Senha</h4>
            <div className="passwordContainer">
              <input
                type={showNewPassword ? "text" : "password"}
                className="passwordInput"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <span
                className="passwordIcon"
                onClick={() => toggleShowPassword("new")}
              >
                {showNewPassword ? <EyeSlash size={24} /> : <Eye size={24} />}
              </span>
            </div>
          </div>
        </div>
      </div>
    </EditContainer>
  );
};
