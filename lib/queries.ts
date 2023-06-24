export const allProductsQuery = () => {
    const query = `*[_type == "product"] | order(_createdAt desc){
      _id,
      _createdAt,
      name,
      details,
      price,
      image{
        asset->{
            _id,
            url
        }
        },
      }
    }`;
  
    return query;
  };