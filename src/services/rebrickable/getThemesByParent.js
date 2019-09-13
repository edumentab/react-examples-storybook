export default function getThemesByParent(parentId) {
  return this.getAllThemes()
    .then(answer => ({
      data: answer.data.filter(t => t.parent_id === parentId),
    }))
    .catch(e => Promise.reject({ error: e }))
}
