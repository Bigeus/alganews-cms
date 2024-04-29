import Table from "../../Components/Table/Table"
import UsePageTitle from "../../Core/Hooks/UsePageTitle"
import DefaultLayout from "../Layouts/Default/Default.layout"
import Chart from "../../Components/Chart/Chart"
import PostsList from "../features/PostsList.features"


const FAKE_DATA = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],

  datasets: [
    {
      label: 'Receitas',
      data: [500, 400, 600, 100, 800, 20, 123, 320, 120, 500, 434, 322],
      fill: true,
      backgroundColor: '#09f',
      borderColor: '#09f',
      borderWidth: 0.5,
      yAxisId: 'cashflow',
    },
    {
      label: 'Despesas',
      data: [100, 200, 250, 500, 1000, 600, 123, 210, 344, 800, 123, 0],
      fill: true,
      backgroundColor: '#274060',
      borderColor: '#274060',
      borderWidth: 0.5,
      yAxisId: 'cashflow',
    }
  ]
}


export default function HomeView() {

  UsePageTitle('Home')


  return <DefaultLayout>
    <Chart data={FAKE_DATA} title="Média de performance nos últimos 12 meses" />

    <PostsList />

  </DefaultLayout>
}