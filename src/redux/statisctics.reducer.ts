import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {statisticsAPI} from "../api/app.api";
import {setStatus} from "./app.reducer";

export type StatisticsType = {
    todayOrdersCount: number
    activeOffersCount: number
    transactionsOrdersForChart: { [key: string]: number }
    valueOfSalesForChart: { [key: string]: number }
}

const initialState: StatisticsType = {
    todayOrdersCount: 0,
    activeOffersCount: 0,
    transactionsOrdersForChart: {},
    valueOfSalesForChart: {}
}

export const getStatistics = createAsyncThunk(
    "getOrdersCount",
    async (params, {dispatch}) => {
        try {
            const todayOrdersCount = await statisticsAPI.getTodayOrdersCount()
            const activeOffersCount = await statisticsAPI.getActiveOffersCount()
            const transactionsOrdersForChart = await statisticsAPI.getTransactionOrdersForChart()
            const valueOfSalesForChart = await statisticsAPI.getValueOfSalesForChart()

            dispatch(setStatus({type: "success", message: "Success statistics data fetching"}))
            return {
                todayOrdersCount: todayOrdersCount.data,
                activeOffersCount: activeOffersCount.data,
                transactionsOrdersForChart: transactionsOrdersForChart.data,
                valueOfSalesForChart: valueOfSalesForChart.data,
            }

        } catch (e) {
            dispatch(setStatus({type: "error", message: e.message}))
            throw new Error()
        }
    }
)

export const updateChartStatisticsByMonth = createAsyncThunk(
    "updateStatisticsByMonth",
    async (month: string, {dispatch}) => {
        try {
            const transactionsOrdersForChart = await statisticsAPI.getTransactionOrdersForChart(month)
            const valueOfSalesForChart = await statisticsAPI.getValueOfSalesForChart(month)

            dispatch(setStatus({type: "success", message: "Success statistics data update"}))

            return {
                transactionsOrdersForChart: transactionsOrdersForChart.data,
                valueOfSalesForChart: valueOfSalesForChart.data,
            }
        } catch (e) {
            dispatch(setStatus({type: "error", message: e.message}))
            throw new Error()
        }
    }
)

const statisticsSlice = createSlice({
    name: "statistics",
    initialState,
    reducers: {},
    extraReducers: {
        [getStatistics.fulfilled.type]: (state, action: PayloadAction<StatisticsType>) => {
            return {...action.payload}
        },
        [updateChartStatisticsByMonth.fulfilled.type]: (state, action: PayloadAction<{
            transactionsOrdersForChart: { [key: string]: number }
            valueOfSalesForChart: { [key: string]: number }
        }>) => {
            return {
                ...state, ...action.payload
            }
        }
    }
})

export default statisticsSlice.reducer;