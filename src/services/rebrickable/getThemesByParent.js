export default function getThemesByParent(parentId) {
  return this.getAllThemes()
    .then(answer => ({
      data: Object.values(answer.data).reduce(
        (acc, t) => (t.parent_id === parentId ? { ...acc, [t.id]: t } : acc),
        {}
      ),
    }))
    .catch(e => Promise.reject({ error: e }))
}
