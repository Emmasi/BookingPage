

const PostAPI = () => {
    useEffect(() => {
        const bookingLesson = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
        fetch('/bookingPage',bookingLesson)
        .then(resp=>resp.json())
        .then(data=>setData(data))
        
      },[]);
};
export default PostAPI;
