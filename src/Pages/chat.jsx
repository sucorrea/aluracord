import React, { useEffect, useState } from "react";

import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import appConfig from "../../config.json";
import { createClient } from "@supabase/supabase-js";
import {
  boxForm,
  boxHeader,
  boxMessage,
  boxMessageList,
  container,
  imageMessageList,
  textdoisMessageList,
  textField,
  textMessageList,
  wrapper,
} from "./stylesChat";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDg2OTA3MywiZXhwIjoxOTU2NDQ1MDczfQ.343ibq7UYFPDdyfsfGmEqUma01RW7P7KC9U2MDAGSkI";
const SUPABASE_URL = "https://kysxypdmtxjlkdysdlas.supabase.co";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function ChatPage() {
  const [mensagem, setMensagem] = useState("");
  const [listaDeMensagens, setListaDeMensagens] = useState([]);

  useEffect(() => {
    supabaseClient
      .from("mensagens")
      .select("*")
      .order("id", { ascending: false })
      .then(({ data }) => {
        console.log("Dados da consulta:", data);
        setListaDeMensagens(data);
      });
  }, []);

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      id: listaDeMensagens.length + 1,
      de: "sucorrea",
      texto: novaMensagem,
    };

    supabaseClient
      .from("mensagens")
      .insert([
        // Tem que ser um objeto com os MESMOS CAMPOS que você escreveu no supabase
        mensagem,
      ])
      .then(({ data }) => {
        setListaDeMensagens([data[0], ...listaDeMensagens]);
      });

    setMensagem("");
  }

  const handleChangeInput = (event) => {
    const valor = event.target.value;
    setMensagem(valor);
  };

  const handleOnKeyPressInput = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleNovaMensagem(mensagem);
    }
  };

  return (
    <Box styleSheet={container}>
      <Box styleSheet={wrapper}>
        <Header />
        <Box styleSheet={boxMessage}>
          <MessageList mensagens={listaDeMensagens} />
          <Box as="form" styleSheet={boxForm}>
            <TextField
              value={mensagem}
              onChange={handleChangeInput}
              onKeyPress={handleOnKeyPressInput}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={textField}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <Box styleSheet={boxHeader}>
      <Text variant="heading5">Chat</Text>
      <Button
        variant="tertiary"
        colorVariant="neutral"
        label="Logout"
        href="/"
      />
    </Box>
  );
}

function MessageList(props) {
  return (
    <Box tag="ul" styleSheet={boxMessageList}>
      {props.mensagens.map((mensagem) => {
        return (
          <Text key={mensagem.id} tag="li" styleSheet={textMessageList}>
            <Box
              styleSheet={{
                marginBottom: "8px",
              }}
            >
              <Image
                styleSheet={imageMessageList}
                src={`https://github.com/${mensagem.de}.png`}
              />
              <Text tag="strong">{mensagem.de}</Text>
              <Text styleSheet={textdoisMessageList} tag="span">
                {new Date().toLocaleDateString()}
              </Text>
            </Box>
            {mensagem.texto}
          </Text>
        );
      })}
    </Box>
  );
}
