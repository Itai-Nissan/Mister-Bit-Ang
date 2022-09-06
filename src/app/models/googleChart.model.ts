export class GoogleChartModel {

    constructor(
        public title: string = '',
        public type: any = 'LineChart',
        public data: Array<Array<any>> = [[]],
        public columnNames: Array<string> = ['Month', 'Rate'],
        public options: any =
            {
                curveType: 'function',
                legend: { position: 'bottom', textStyle: { color: '#b2b7bb' } },
                backgroundColor: '',
                chartArea: { width: "75%", height: "70%" },
                colors: ['#fb8e11'],
                hAxis: { textStyle: { color: '#b2b7bb' } },
                vAxis: { textStyle: { color: '#b2b7bb' } },
                titleTextStyle: { color: '#b2b7bb' }
            },
    ) { }
}