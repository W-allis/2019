export function resultComponent(data: {[key: string]: any}) {
  return `
    <ul class="mdui-list">
      <li class="mdui-list-item mdui-ripple vs-visit-count">
          <div>产品名称：${data.productName}</div>
          <div>历史来访次数：
            <div class="vs-tag">${data.history}</div>
          </div>
      </li>
      <li class="mdui-list-item mdui-ripple">金额：${data.amount}</li>
      <li class="mdui-list-item mdui-ripple">来访记录：</li>
      <li class="mdui-list-item mdui-ripple">
          <table class="mdui-table">
              <thead>
                  <tr>
                      <th>#</th>
                      <th>来访时间</th>
                      <th>手机号码</th>
                  </tr>
              </thead>
              <tbody>
                ${data.list.reduce(function(total: string, curr: any, index: number) {
                  total += `<tr>
                              <td>${index + 1}</td>
                              <td>${curr.visitTime}</td>
                              <td>${curr.mobile}</td>
                            </tr>`
                  return total
                }, '')}
              </tbody>
          </table>
      </li>
    </ul>
  `
}