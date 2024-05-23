import { useEffect, useState } from "react";
import transformEditorMonthlyEaningsIntoChartJs from "../../Core/Utils/TransformEditorMonthlyEarningsIntoChartJs";
import Chart, { ChartProps } from "../../Components/Chart/Chart";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { MetricsService } from "bigeus-sdk";


function UserPerformance() {
  const [editorEarnings, setEditorEarings] = useState<ChartProps['data']>()
  const [error, setError] = useState<Error>()

  useEffect(() => {
    MetricsService
      .getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEaningsIntoChartJs)
      .then(setEditorEarings)
      .catch(error => {
        setError(new Error(error.message))
      })
  }, [])

  if(error){
    throw error
  }

  if (!editorEarnings)
    return <div>
      <Skeleton height={227} />
    </div>

  return <Chart
    title="Média de performance nos últimos 12 meses" 
    data={editorEarnings || <Skeleton />}
  />
}

export default UserPerformance