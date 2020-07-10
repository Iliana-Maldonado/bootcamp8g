const wall = {
    isBuilt: false,
    isPlanished: false,
    isPainted: false
}

function build (wallToBuild, callback) {

    setTimeout(() => {
        wallToBuild.isBuilt = true
        console.log('wall is built')

        const error = wallToBuild.isBuilt
        ? null
        : 'cannot build'

        callback(error, wallToBuild)

    }, 3000)
}

function planish (wallToPlanish, callback) {
    console.log('planished')

    setTimeout(() => {
        wallToPlanish.isPlanished = true
        console.log('wall is planish')

        const error =wallToPlanish.isPlanished
        ? null
        : 'cannot planished'

        callback(error, wallToPlanish)

    }, 2000)
}

function paint (wallToPaint, callback) {
    console.log('paint')

    setTimeout(() => {
        wallToPaint.isPainted = true
        console.log('wall is painted')

        const error =wallToPaint.isPainted
        ? null
        : 'cannot planished'

        callback(error, wallToPaint)

    }, 4000)
}

//const builtWall = build(wall)
//const planishedWall = planish(builtWall)
//const paintedWall = paint(planishedWall)

//console.log('finished wall: ', paintedWall)

build(wall, (error, wallBuilt) => {
    planish(wallBuilt, (planishError, wallPlanished) => {
        if(planishError) return console.error('error in planish')

        paint(wallPlanished, (paintError, wallPainted) => {
            if(paintError) return console.error('error in paint')
        })
    })
})
