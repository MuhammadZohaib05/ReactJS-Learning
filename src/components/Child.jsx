import GrandChild from "./GrandChild"

function Child({name}) {
  return <GrandChild newname = {name} />
}

export default Child