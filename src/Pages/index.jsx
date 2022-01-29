import React, { useState } from "react";
import appConfig from "../../config.json";

import { useRouter } from "next/router";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import { Titulo } from "../Components/Titulo";
import {
  formulario,
  wrapper,
  wrapperForm,
  nome,
  colorsTextField,
  buttonCollors,
  wrapperImagem,
  legendaImagem,
  imagem,
} from "./styles";

const PaginaInicial = () => {
  const [username, setUsername] = useState("sucorrea");
  const roteamento = useRouter();

  const handleChangeInput = (event) => {
    const valor = event.target.value;
    setUsername(valor);
  };

  const handleSubmit = (infosDoEvento) => {
    infosDoEvento.preventDefault();
    console.log("Alguém submeteu o form");
    roteamento.push("/chat");
    // window.location.href = '/chat';
  };

  return (
    <>
      <Box styleSheet={wrapper}>
        <Box styleSheet={formulario}>
          {/* Formulário */}
          <Box as="form" onSubmit={handleSubmit} styleSheet={wrapperForm}>
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={nome}>
              {appConfig.name}
            </Text>
            <TextField
              value={username}
              onChange={handleChangeInput}
              fullWidth
              textFieldColors={colorsTextField}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={buttonCollors}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box styleSheet={wrapperImagem}>
            <Image
              styleSheet={imagem}
              src={`https://github.com/${username}.png`}
            />
            <Text variant="body4" styleSheet={legendaImagem}>
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
};

export default PaginaInicial;
