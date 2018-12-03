interface Root {
  count: Count;
  router?: Router;
}
type RootModel = Root;
interface Count {
  count: number;
}

interface Router {
  location: Location;
  action: string;
}

interface Location {
  pathname: string;
  search: string;
  hash: string;
}
