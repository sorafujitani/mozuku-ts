const tasks = []
let id = 1
// tasks [ {id: 1, title, isComplete }, {id: 2, title, isComplete }]

// 入力: String 処理: Arrayに追加
function addTask(title) {
  // task {id, title: title, isComplete: false}
  // id 初回は1, 呼び出されるたびにインクリメントされる
  let incrementableId = id++
  const task = { id: incrementableId, title: title, isComplete: false }
  tasks.push(task)
  console.log(`追加したにょ
id: ${incrementableId}
タイトル: ${title}
`)
}

// タスクを表示
// 入力: Array 出力: Arrayを表示
function listTask() {
  console.log(`
<タスクリスト>`)
  for (const task of tasks) {
    const mark = task.isComplete ? "✔" : " "
    console.log(`[${mark}]: ${task.title}`)
  }
}

// タスクを完了
// 入力:Array 出力: 完了したタスクと未完了のタスクの表示
// 処理:
// select * from tasks where id = うけとったid
// update(みつけたtaskのisCompleteフラグをtrueにする)
function completeTask(id) {
  const targetTask = tasks.find((t) => {
    return t.id == id
  })

  targetTask.isComplete = true

  const mark = targetTask.isComplete ? "✔" : " "

  console.log("タスクを完了したにょ")
  console.log(`[${mark}]: targetTask.title`)
}

// データ構造
// tasks { id:number, title: String, isComplete: boolean }
// id: 検索
// title: 表示
// isComplete: 完了してるかどうか
addTask("初めてのタスク")
addTask("2こめのタスク")
listTask()
completeTask(1)
listTask()
