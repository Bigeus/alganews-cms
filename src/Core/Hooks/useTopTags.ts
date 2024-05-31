import { useCallback, useState } from "react";
import { Metric, MetricsService, } from "bigeus-sdk";

export default function useTopTags() {
    const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([]);

    const fetchTopTags = useCallback(async function () {
        MetricsService.getTop3Tags().then(setTopTags);
    }, []);

    return {
        topTags,
        fetchTopTags,
    };
}