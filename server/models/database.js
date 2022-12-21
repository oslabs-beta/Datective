const { InfluxDB, Point } = require('@influxdata/influxdb-client');
const dotenv = require('dotenv')
const path = require('path');
dotenv.config({path: path.resolve(__dirname, "../../.env")});

const token = process.env.DB_INFLUXDB_INIT_ADMIN_TOKEN
const org = process.env.DB_INFLUXDB_INIT_ORG
const bucket = process.env.DB_INFLUXDB_INIT_BUCKET

const insertToDB = () => {
    // create a new instance of influxDB, providing URL and API token
    const client = new InfluxDB({url: 'http://localhost:8086', token: token})
    // create a write client, providing influxDB organization and bucket name
    const writeApi = client.getWriteApi(org, bucket, 'ns')
    // create default tags to all points
    // writeApi.useDefaultTags({endpoint: '/signup'})

    // use the point constructor passing in "measurement" (table)
    const point = new Point('metrics')
        .tag('path','/good')
        .tag('method','GET')
        .intField('res_time', 305)
        .intField('status_code', 230)
        // .timestamp()
        
    writeApi.writePoint(point)

    writeApi.close().then(() => {
        console.log('WRITE FINISHED')
    })
}

insertToDB()
module.exports = insertToDB;