import React from "react";

const StudentPortal = () => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const data = await Api.getAll("quizs");
      setQuiz(data.data);
      setLoading(false);
    };
    fetchItem();
  }, []);

  return !loading ? (
    <div>
      <Breadcrumb style={{ margin: 16 }}>
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Employees</Breadcrumb.Item>
      </Breadcrumb>

      <PageContent>
        <Space direction="vertical">
          <Space
            style={{
              padding: "0 16px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          ></Space>

          <h5>Online/Offline test and Quizzes</h5>
          <Link to="/addnewquiz">
            <Button type="primary">
              <PlusOutlined />
              Add New Quiz
            </Button>
          </Link>

          <div
            style={{
              padding: "0 16px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <div>
              <h5>Studying Task</h5>
              <Link to="/addnewquiz">
                <Button type="primary">
                  <PlusOutlined />
                  New Task
                </Button>
              </Link>
            </div>

            <div style={{ marginLeft: "20px" }}>
              <h5>Capacity Assasement</h5>
              <Link to="/addsubject">
                <Button type="primary">
                  <PlusOutlined />
                  New Assessment
                </Button>
              </Link>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            {quiz.data.map((quizItem) => (
              <QuizCard
                quizTitle={quizItem.quizBasicSetting.title}
                quizDescription={quizItem.quizBasicSetting.description}
                createdDate={quizItem.created_at}
              />
            ))}
          </div>
        </Space>
      </PageContent>
    </div>
  ) : (
    <p>Hello</p>
  );
};

export default StudentPortal;
