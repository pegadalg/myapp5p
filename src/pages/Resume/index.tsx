import { HistoryCard } from "../../components/HistoryCard";

import {
  Container,
  Content,
  Header,
  Title
} from "./style";

export function Resume() {
  return (
    <Container>
      <Header>
        <Title>Resumo por Categoria</Title>
      </Header>

      <Content contentContainerStyle={{ padding: 24 }}>
        <HistoryCard
          title='Alimentacao'
          amount='R$ 150.50'
        />

        <HistoryCard
          title='Vestuario'
          amount='R$ 150.50'
        />
      </Content>

    </Container>
  )
}