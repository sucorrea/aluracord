import appConfig from "../../config.json";

export const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: appConfig.theme.colors.primary[500],
  backgroundImage:
    "url(https://i.pinimg.com/originals/bd/24/20/bd24202df70d1807f1e77df1b889cda8.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundBlendMode: "multiply",
  color: appConfig.theme.colors.neutrals["000"],
};

export const wrapper = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
  borderRadius: "5px",
  backgroundColor: appConfig.theme.colors.neutrals[700],
  height: "100%",
  maxWidth: "95%",
  maxHeight: "95vh",
  padding: "32px",
};
export const boxMessage = {
  position: "relative",
  display: "flex",
  flex: 1,
  height: "80%",
  backgroundColor: appConfig.theme.colors.neutrals[600],
  flexDirection: "column",
  borderRadius: "5px",
  padding: "16px",
};
export const boxForm = {
  display: "flex",
  alignItems: "center",
};
export const textField = {
  width: "100%",
  border: "0",
  resize: "none",
  borderRadius: "5px",
  padding: "6px 8px",
  backgroundColor: appConfig.theme.colors.neutrals[800],
  marginRight: "12px",
  color: appConfig.theme.colors.neutrals[200],
};
export const boxMessageList = {
  overflow: "scroll",
  display: "flex",
  flexDirection: "column-reverse",
  flex: 1,
  color: appConfig.theme.colors.neutrals["000"],
  marginBottom: "16px",
};
export const textMessageList = {
  borderRadius: "5px",
  padding: "6px",
  marginBottom: "12px",
  hover: {
    backgroundColor: appConfig.theme.colors.neutrals[700],
  },
};
export const imageMessageList = {
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  display: "inline-block",
  marginRight: "8px",
};

export const textdoisMessageList = {
  fontSize: "10px",
  marginLeft: "8px",
  color: appConfig.theme.colors.neutrals[300],
};

export const boxHeader = {
  width: "100%",
  marginBottom: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
