import {
  ArrowLeft,
  Check,
  Eye,
  EyeSlash,
  Image,
  Phone,
  Trash,
} from "phosphor-react";
import { EditContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export const Edit = () => {
  const navigate = useNavigate();

  const storedEmail = localStorage.getItem("userEmail");
  const storedFullName = localStorage.getItem("userFullName");
  const storedPhoto = localStorage.getItem("userPhoto");

  const [files, setFiles] = useState(storedPhoto ?? "");
  const [fileBase64, setFileBase64] = useState<string | ArrayBuffer | null>("");

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    disabled: files?.length > 0,
  });

  const [name, setName] = useState(storedFullName);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

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

  const handleEdit = async () => {
    try {
      setIsLoading(true);
      const { data } = await api.put("/updateUser", {
        auth: {
          email: storedEmail,
          fullName: storedFullName,
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
      });
      setIsLoading(false);
      return toast.success("Dados do usuário atualizados com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      return toast.error("Falha ao atualizar os dados do usuário!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    if (!files) {
      setFiles(acceptedFiles?.length > 0 ? acceptedFiles[0].name : "");

      // const reader = new FileReader();
      // if (acceptedFiles.length === 0) return;

      // reader.readAsDataURL(acceptedFiles[0]);
      // reader.onload = () => {
      //   const base64: string = reader.result as string;
      //   const match = base64.match(/^data:(.*?);base64,(.*)$/);

      //   if (match && match.length === 3) {
      //     const [, mimeType, base64String] = match;
      //     const byteArray = Uint8Array.from(atob(base64String), (c) =>
      //       c.charCodeAt(0)
      //     );

      //     const compressedArray = pako.deflate(byteArray);
      //     const compressedBase64 = btoa(
      //       String.fromCharCode(...new Uint8Array(compressedArray))
      //     );

      //     const compressedArray2 = pako.deflate(byteArray, { level: 9 }); // nível máximo de compressão
      //     const compressedBase64_2 = btoa(
      //       String.fromCharCode(...new Uint8Array(compressedArray2))
      //     );

      //     setFileBase64(compressedBase64_2);
      //   }
      // };
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
          <button
            disabled={handleSaveChangesDisabled()}
            onClick={() => handleEdit()}
          >
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
                <div
                  className="button"
                  title={files?.length > 0 ? `${files}` : "Adicionar Foto"}
                >
                  {!files ? <Image size={24} /> : ""}
                  <span className="buttonText">
                    {files?.length > 0 ? `${files}` : "Adicionar Foto"}
                  </span>
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
