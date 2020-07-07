import P401 from '../views/p401'
import Input from '../views/input'
import Select from '../views/select'
import Tab from '../views/tab'

const routes = [
  { path: '/401', component: P401 },
  { path: '/input', component: Input, children: [
    { path: '/select', component: Select }
  ] },
  { path: '/select', component: Select },
  { path: '/tab', component: Tab }
]

export default routes
