import styled from "@emotion/styled";

export const Container = styled.div`
  /* flex-direction: column; */
  max-width: 1400px;
  width: 100%;
  height: 100%;
  padding: 50px 60px;
  background-color: rgba(255, 255, 255, 0.5);
  align-items: flex-start;
  justify-content: space-between;
`;

export const ContainerTitle = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 50px;
  justify-content: flex-start;
`;
export const ContainerWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 두 개씩 가로 배치 */
  align-items: center;
  justify-content: center;
  gap: 20px; /* 항목 간 간격 */
  width: 100%;
`;

export const ProjectListWrap = styled.ul`
  display: flex;
  margin-bottom: 20px;
  width: 400px;
  flex-direction: column; /* 내부 내용을 수직으로 정렬 */
  justify-content: center; /* 내부 수직 중앙 정렬 */
  align-items: center; /* 내부 가로 중앙 정렬 */
`;

export const ProjectDataWrap = styled.div`
  margin-left: 200px;
  text-wrap: nowrap;
  background-color: white;
  border: 1px solid black;
  border-radius: 6px;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
`;

export const Projects = styled.li`
  display: flex;
  width: 450px;
  max-height: 500px;
  padding: 10px 0px;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 5px;
  }
`;

export const ProjectDataSubtitle = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const Duration = styled.p`
  margin-left: 10px;
`;

export const Subtitle = styled.p`
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;
