import { SanityClient } from "@sanity/client";

export default SanityClient({
  projectId: "REACT_APP_SANITY_PROJECT_ID",
  dataset: "production",
});
