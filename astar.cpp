
#include <bits/stdc++.h>
using namespace std;

string values[13] = {"Pad", "S", "A", "B", "C", "D", "E", "G1", "G2", "G3"};
string goalString[3] = {"G1", "G2", "G3"};
vector<int> goal;
int from[13] = {1, 1, 2, 2, 2, 4, 3, 3, 3, 5, 5, 6, 8};
int to[13] = {2, 3, 3, 4, 5, 1, 5, 9, 6, 7, 8, 5, 6};
int costArr[13] = {1, 7, 2, 1, 15, 2, 10, 11, 4, 5, 3, 3, 6};
int heuristicVal[10] = {INT_MAX, 100, 10, 25, 1, 3, 6, 0, 0, 0};
unordered_map<string, int> heuristic;

struct Node
{
  int id;
  int f;
  int g;
  int h;
  Node(int i, int f_val, int g_val, int h_val) : id(i), f(f_val), g(g_val), h(h_val) {}
  bool operator<(const Node &other) const
  {
    return f > other.f;
  }
};
void AStarSearch(unordered_map<int, vector<pair<int, int>>> graph, int start, int goal)
{
  priority_queue<Node> open_list;
  unordered_map<int, bool> closed_list;
  unordered_map<int, int> g_values;
  open_list.push(Node(start, 0, 0, heuristic[values[start]]));
  g_values[start] = 0;
  while (!open_list.empty())
  {
    Node current_node = open_list.top();
    open_list.pop();
    vector<int> path;
    if (heuristic[values[current_node.id]] == 0)
    {
      cout << "Goal found! Total cost is : " << current_node.f << endl;
      cout << "Path found: " << endl;
      int node = current_node.id;
      path.push_back(node);
      while (node != start)
      {
        for (auto &neighbor : graph[node])
        {
          if (g_values[neighbor.first] == current_node.g - neighbor.second)
          {
            path.push_back(neighbor.first);
            current_node = Node(neighbor.first, current_node.f, g_values[neighbor.first], heuristic[values[neighbor.first]]);
            node = neighbor.first;
            break;
          }
        }
      }
      reverse(path.begin(), path.end());
      int i;
      for (i = 0; i < path.size() - 1; i++)
      {
        cout << path[i] << " -> ";
      }
      cout << path[i] << endl;
      return;
    }
    closed_list[current_node.id] = true;
    for (auto &neighbor : graph[current_node.id])
    {
      if (closed_list[neighbor.first])
      {
        continue;
      }

      int tentative_g = g_values[current_node.id] + neighbor.second;
      if (!g_values.count(neighbor.first) || tentative_g < g_values[neighbor.first])
      {
        int f_val = tentative_g + heuristic[values[neighbor.first]];
        Node neighbor_node = Node(neighbor.first, f_val, tentative_g, heuristic[values[neighbor.first]]);
        open_list.push(neighbor_node);
        g_values[neighbor.first] = tentative_g;
      }
    }
  }
  cout << "No path found." << endl;
}

int main()
{
  int n = 9, e = 13;
  //   cin >> n >> e;
  int start;
  start = 1;
  for (int i = 0; i < n; i++)
  {
    heuristic[values[i]] = heuristicVal[i];

    if (heuristic[values[i]] == 0)
    {
      goal.push_back(heuristic[values[i]]);
    }
  }
  unordered_map<int, vector<pair<int, int>>> graph;
  for (int i = 0; i < e; i++)
  {
    graph[from[i]].push_back(make_pair(to[i], costArr[i]));
  }
  AStarSearch(graph, start, 9);
  return 0;
}