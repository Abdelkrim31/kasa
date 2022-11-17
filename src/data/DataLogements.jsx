import Logements from "../data/logements.json"

const getAllLogements = () => {
  return Logements
}

const getOneLogement = (id) => {
  return Logements.find(log => log.id === id)
}

export const DataLogements = {
  getAllLogements, getOneLogement
}