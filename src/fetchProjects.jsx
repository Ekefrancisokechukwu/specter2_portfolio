import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "kang3wxr2que",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [isError, setIsError] = useState();

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "portfolioProjects",
      });

      const projects = response.items.map((item) => {
        const { category, name, sourceCode, url, stacks, images } = item.fields;
        const id = item.sys.id;
        const img = images?.fields?.file?.url;
        return { category, name, sourceCode, url, stacks, id, img };
      });

      setProjects(projects);
      setLoading(false);
    } catch (error) {
      const netError = error.message;
      setIsError(netError);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects, isError };
};
