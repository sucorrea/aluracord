import appConfig from "../../config.json";

export const wrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  backgroundColor: appConfig.theme.colors.primary["100"],
  backgroundImage:
    "url(https://i.pinimg.com/originals/bd/24/20/bd24202df70d1807f1e77df1b889cda8.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundBlendMode: "multiply",
};

export const formulario = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: {
    xs: "column",
    sm: "row",
  },
  width: "100%",
  maxWidth: "700px",
  borderRadius: "5px",
  padding: "32px",
  margin: "16px",
  boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
  backgroundColor: appConfig.theme.colors.neutrals[700],
};

export const wrapperForm = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: { xs: "100%", sm: "50%" },
  textAlign: "center",
  marginBottom: "32px",
};
export const nome = {
  marginBottom: "32px",
  color: appConfig.theme.colors.neutrals[300],
};

export const colorsTextField = {
  neutral: {
    textColor: appConfig.theme.colors.neutrals[200],
    mainColor: appConfig.theme.colors.neutrals[900],
    mainColorHighlight: appConfig.theme.colors.primary[500],
    backgroundColor: appConfig.theme.colors.neutrals[800],
  },
};
export const buttonCollors = {
  contrastColor: appConfig.theme.colors.neutrals["000"],
  mainColor: appConfig.theme.colors.primary[500],
  mainColorLight: appConfig.theme.colors.primary[400],
  mainColorStrong: appConfig.theme.colors.primary[600],
};
export const wrapperImagem = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "220px",
  padding: "16px",
  backgroundColor: appConfig.theme.colors.neutrals[800],
  border: "1px solid",
  borderColor: appConfig.theme.colors.neutrals[999],
  borderRadius: "10px",
  flex: 1,
  minHeight: "240px",
};

export const legendaImagem = {
  color: appConfig.theme.colors.neutrals[200],
  backgroundColor: appConfig.theme.colors.neutrals[900],
  padding: "3px 10px",
  borderRadius: "1000px",
};
export const imagem = {
  borderRadius: "50%",
  marginBottom: "16px",
};
