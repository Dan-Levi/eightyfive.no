module.exports = {
    apps: [
        {
            name: "eightyfive-server",
            script: "/home/eightyfive/web/eightyfive.no/server/dist/index.js",
            cwd: "/home/eightyfive/web/eightyfive.no",
            instances: 1,
            exec_mode: "fork",
            watch: false,
            env: {
                NODE_ENV: "production"
            }
        }
    ]
};