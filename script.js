// UI localization
const uiLabels = {
    en: {
        'ui-getting-started': 'Getting Started',
        'ui-intro': 'Introduction',
        'ui-quickstart': 'Quickstart',
        'ui-supervised': 'Supervised Learning',
        'ui-unsupervised': 'Unsupervised Learning',
        'ui-linear': 'Linear Regression',
        'ui-logistic': 'Logistic Regression',
        'ui-ridge-lasso': 'Ridge, Lasso & ElasticNet',
        'ui-knn': 'KNN',
        'ui-naive-bayes': 'Naive Bayes',
        'ui-svm': 'Support Vector Machine (SVM)',
        'ui-tree': 'Decision Tree',
        'ui-forest': 'Random Forest',
        'ui-gb': 'Gradient Boosting',
        'ui-adaboost': 'AdaBoost',
        'ui-xgboost': 'XGBoost / LightGBM / CatBoost',
        'ui-nn': 'Neural Network',
        'ui-kmeans': 'K-Means Clustering'
    },
    vi: {
        'ui-getting-started': 'Bắt đầu',
        'ui-intro': 'Giới thiệu',
        'ui-quickstart': 'Làm quen nhanh',
        'ui-supervised': 'Học có giám sát',
        'ui-unsupervised': 'Học không giám sát',
        'ui-linear': 'Hồi quy tuyến tính (Linear)',
        'ui-logistic': 'Hồi quy Logistic',
        'ui-ridge-lasso': 'Hồi quy Ridge, Lasso & ElasticNet',
        'ui-knn': 'KNN',
        'ui-naive-bayes': 'Naive Bayes',
        'ui-svm': 'Máy véctơ hỗ trợ (SVM)',
        'ui-tree': 'Cây quyết định (Tree)',
        'ui-forest': 'Rừng ngẫu nhiên (Forest)',
        'ui-gb': 'Tăng cường Gradient (GB)',
        'ui-adaboost': 'AdaBoost',
        'ui-xgboost': 'XGBoost / LightGBM / CatBoost',
        'ui-nn': 'Mạng nơ ron (Neural Network)',
        'ui-kmeans': 'Phân cụm K-Means'
    }
}

// ----------------------------------------------------
// DYNAMIC PARAMETER CONFIGURATION (As requested)
// ----------------------------------------------------
const standardDebug = [
    ['out_formula', 'bool', 'Show formulas'],
    ['out_stat', 'bool', 'Show statistics'],
    ['out_data', 'bool', 'Show dataset info'],
    ['out_split', 'bool', 'Show data splitting'],
    ['out_shape', 'bool', 'Show tensor shape'],
    ['out_index', 'bool', 'Show indices'],
    ['explain', 'bool', 'Explain predictions']
];

const modelParams = {
    linear_regression: [
        ['lr', 'float', 'Learning rate (def: 0.01)'],
        ['epochs', 'int', 'Total training iterations (def: 1000)'],
        ['tol', 'float', 'Convergence tolerance (def: 1e-6)'],
        ['criterion', 'str', "Loss function: 'mse' or 'mae'"],
        ['normalize', 'bool', 'Normalize input data (def: True)'],
        ['log_train_csv', 'bool', 'Save training log to CSV'],
        ['train_csv_file', 'str', 'Training log filename (def: linear_training_log.csv)'],
        ['log_csv', 'bool', 'Save prediction results to CSV'],
        ['csv_file', 'str', 'Prediction results filename (def: linear_predict_results.csv)']
    ],
    logistic_regression: [
        ['lr', 'float', 'Learning rate (def: 0.01)'],
        ['epochs', 'int', 'Total training iterations (def: 1000)'],
        ['tol', 'float', 'Convergence tolerance (def: 1e-6)'],
        ['normalize', 'bool', 'Normalize input data (def: True)'],
        ['log_train_csv', 'bool', 'Save training log to CSV'],
        ['train_csv_file', 'str', 'Training log filename (def: logistic_training_log.csv)'],
        ['log_csv', 'bool', 'Save prediction results to CSV'],
        ['csv_file', 'str', 'Prediction results filename (def: logistic_predict_results.csv)']
    ],
    knn: [
        ['k', 'int', 'Number of neighbors (def: 5)'],
        ['distance', 'str', "Distance metric (def: 'euclidean')"],
        ['weights', 'str', "'uniform' or 'distance'"],
        ['p', 'int', 'Power parameter for Minkowski (def: 2)'],
        ['log_csv', 'bool', 'Save results to CSV'],
        ['csv_file', 'str', 'CSV filename (Classification: KNN_classification_results.csv / Regression: KNN_regression_results.csv)']
    ],
    decision_tree: [
        ['criterion', 'str', "'gini' (Classification) or 'mse' (Regression)"],
        ['max_depth', 'int / None', 'Maximum depth of the tree'],
        ['min_samples_split', 'int', 'Min samples to split node (def: 2)'],
        ['min_samples_leaf', 'int', 'Min samples per leaf (def: 1)'],
        ['max_features', 'int / None', 'Max features for best split'],
        ['ccp_alpha', 'float', 'Pruning complexity parameter (def: 0.0, Classification only)'],
        ['splitter', 'str', "Split strategy (def: 'best', Classification only)"],
        ['random_state', 'int / None', 'Seed for randomness'],
        ['log_build_csv', 'bool', 'Save tree building log to CSV'],
        ['build_csv_file', 'str', 'Build log filename'],
        ['log_predict_csv', 'bool', 'Save prediction results to CSV'],
        ['predict_csv_file', 'str', 'Prediction results filename']
    ],
    random_forest: [
        ['n_trees', 'int', 'Number of trees (def: 10)'],
        ['max_depth', 'int / None', 'Max depth of each tree'],
        ['min_samples_split', 'int', 'Min samples to split (def: 2)'],
        ['min_samples_leaf', 'int', 'Min samples per leaf (def: 1)'],
        ['max_features', 'int / None', 'Features per split'],
        ['random_state', 'int / None', 'Seed for randomness'],
        ['log_vote_csv', 'bool', 'Save voting log to CSV (Classification)'],
        ['vote_csv_file', 'str', 'Vote log filename (def: rf_vote_log.csv, Classification)'],
        ['log_tree_output', 'bool', 'Log individual tree outputs (Regression)'],
        ['log_csv', 'bool', 'Save prediction results to CSV'],
        ['csv_file', 'str', 'Prediction results filename']
    ],
    kmeans: [
        ['k', 'int', 'Number of clusters (def: 3)'],
        ['max_iter', 'int', 'Maximum iterations (def: 300)'],
        ['tol', 'float', 'Convergence tolerance (def: 1e-4)'],
        ['init', 'str', "Initialization method (def: 'random')"],
        ['random_state', 'int / None', 'Seed for randomness'],
        ['log_csv', 'bool', 'Save results to CSV'],
        ['csv_file', 'str', 'CSV filename (def: KMEAN_results.csv)']
    ],
    neural_network: [
        ['layers', 'list', 'Network structure'],
        ['lr', 'float', 'Learning rate'],
        ['epochs', 'int', 'Training epochs'],
        ['out_loss', 'bool', 'Show loss'],
        ['out_epoch', 'bool', 'Show epoch info'],
        ['out_gradient', 'bool', 'Show gradients'],
        ['out_update', 'bool', 'Show weight updates'],
        ['loss_csv', 'bool', 'Save loss to CSV']
    ]
};

function renderTable(paramsArray, title) {
    if (!paramsArray || paramsArray.length === 0) return '';
    let rows = paramsArray.map(p => `<tr><td><code>${p[0]}</code></td><td>${p[1]}</td><td>${p[2]}</td></tr>`).join('');
    return `
        <h2>${title}</h2>
        <table class="params-table">
            <thead>
                <tr><th>Parameter</th><th>Type</th><th>Description</th></tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    `;
}

// ----------------------------------------------------
// DOCUMENTATION TEXT CONTENT
// ----------------------------------------------------

const docsData_en = {
    introduction: `
        <h1>pysimpml</h1>
        <p>A simple, pure NumPy machine learning library designed for educational purposes, ease of use, and transparency. <strong>pysimpml</strong> provides clear implementations of classic machine learning algorithms from scratch, allowing users to trace the internal mathematics and logic effortlessly.</p>
        
        <div class="callout">
            <p><strong>Note:</strong> This library is built entirely on top of <code>numpy</code> and does not rely on complex backends.</p>
        </div>

        <h2>Features</h2>
        <ul>
            <li><strong>Simple API:</strong> Scikit-learn like <code>fit()</code>, <code>predict()</code>, and <code>score()</code> methods.</li>
            <li><strong>Transparency:</strong> Built-in options to print gradients, internal update steps, distance calculations, and vote distributions during training for debugging and learning.</li>
            <li><strong>Extensive Logging:</strong> Support for logging training loss, metrics, and epochs seamlessly to CSV files.</li>
        </ul>

        <h2>Installation</h2>
        <p>Import the models directly from the <code>pysimpml.models</code> module in your project.</p>
        <pre><code class="language-python">from pysimpml.models import LinearRegression, LogisticRegression, DecisionTreeClassification</code></pre>
    `,
    quickstart: `
        <h1>Quickstart</h1>
        <p>Here is a basic example of training a <strong>Linear Regression</strong> model using <code>pysimpml</code>.</p>
        <pre><code class="language-python">import numpy as np
from pysimpml.models import LinearRegression

# 1. Create dummy data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 5, 4, 5])

# 2. Initialize the model with verbose outputs
model = LinearRegression(
    lr=0.01, 
    epochs=100, 
    out_loss=True, 
    out_epoch=True
)

# 3. Train the model
model.fit(X, y)

# 4. Predict and evaluate
predictions = model.predict([[6]])
score = model.score(X, y)

print("Predictions:", predictions)
print("R2 Score:", score)</code></pre>
    `,
    linear_regression: `
        <h1>LinearRegression</h1>
        <p>A simple implementation of Linear Regression using Gradient Descent.</p>
        <pre><code class="language-python">LinearRegression(lr=0.01, epochs=1000, ...)</code></pre>
        <div id="dynamic-params"></div>
        <h2>Methods</h2>
        <div class="method-block"><h4>fit(X, y)</h4><p>Fit the linear model via gradient descent.</p></div>
        <div class="method-block"><h4>predict(X)</h4><p>Predict using the linear model.</p></div>
        <div class="method-block"><h4>score(X, y)</h4><p>Return the $R^2$ score of the prediction.</p></div>
    `,
    logistic_regression: `
        <h1>LogisticRegression</h1>
        <p>Logistic Regression classifier for binary classification tasks, utilizing gradient descent and the sigmoid activation function.</p>
        <pre><code class="language-python">LogisticRegression(lr=0.01, epochs=1000, ...)</code></pre>
        <div id="dynamic-params"></div>
        <h2>Methods</h2>
        <div class="method-block"><h4>fit(X, y)</h4><p>Fit the logistic classifier. Computes binary cross entropy loss internally.</p></div>
        <div class="method-block"><h4>predict(X)</h4><p>Predict class labels for samples in X. Threshold is 0.5.</p></div>
        <div class="method-block"><h4>score(X, y)</h4><p>Return the mean accuracy on the given test data.</p></div>
    `,
    ridge_lasso_elastic: `
        <h1>Ridge, Lasso & ElasticNet</h1>
        <p>Regularized linear regression models featuring L1 (Lasso) and L2 (Ridge) penalties.</p>
        <h2><em>Update coming soon...</em></h2>
    `,
    knn: `
        <h1>K-Nearest Neighbors (Classification & Regression)</h1>
        <p>Models implementing the k-nearest neighbors algorithm for classification (majority vote) and regression (averaging).</p>
        <pre><code class="language-python">from pysimpml.models import KNNClassification, KNNRegression

classifier = KNNClassification(k=5, ...)
regressor = KNNRegression(k=5, ...)</code></pre>
        <div id="dynamic-params"></div>
        <h2>Methods</h2>
        <div class="method-block"><h4>fit(X, y)</h4><p>Store the training data.</p></div>
        <div class="method-block"><h4>predict(X)</h4><p>Predict targets by finding the k-nearest neighbors.</p></div>
        <div class="method-block"><h4>score(X, y)</h4><p>Return the accuracy or R2 score.</p></div>
    `,
    naive_bayes: `
        <h1>Naive Bayes</h1>
        <p>Probabilistic classifiers based on applying Bayes' theorem (GaussianNB, MultinomialNB, BernoulliNB).</p>
        <h2><em>Update coming soon...</em></h2>
    `,
    svm: `
        <h1>Support Vector Machine (SVM)</h1>
        <p>Support Vector Classification (SVC) and Regression (SVR) using robust margin boundaries.</p>
        <h2><em>Update coming soon...</em></h2>
    `,
    decision_tree: `
        <h1>DecisionTree (Classification & Regression)</h1>
        <p>A decision tree model building an internal node tree structure through recursion.</p>
        <pre><code class="language-python">from pysimpml.models import DecisionTreeClassification, DecisionTreeRegression

classifier = DecisionTreeClassification(max_depth=None, ...)
regressor = DecisionTreeRegression(max_depth=None, ...)</code></pre>
        <div id="dynamic-params"></div>
        <h2>Methods</h2>
        <div class="method-block"><h4>fit(X, y)</h4><p>Build the tree recursively from the training set.</p></div>
        <div class="method-block"><h4>predict(X)</h4><p>Predict classes or values for X.</p></div>
        <div class="method-block"><h4>score(X, y)</h4><p>Return the accuracy or R2 score.</p></div>
    `,
    random_forest: `
        <h1>RandomForest (Classification & Regression)</h1>
        <p>An ensemble learning method using a multitude of decision trees for robust predictions.</p>
        <pre><code class="language-python">from pysimpml.models import RandomForestClassification, RandomForestRegression

classifier = RandomForestClassification(n_trees=10, ...)
regressor = RandomForestRegression(n_trees=10, ...)</code></pre>
        <div id="dynamic-params"></div>
        <h2>Methods</h2>
        <div class="method-block"><h4>fit(X, y)</h4><p>Build a forest of trees from the training set.</p></div>
        <div class="method-block"><h4>predict(X)</h4><p>Predict class or regression value for X.</p></div>
        <div class="method-block"><h4>score(X, y)</h4><p>Return the accuracy or R2 score.</p></div>
    `,
    gradient_boosting: `
        <h1>Gradient Boosting</h1>
        <p>Ensemble technique building sequentially better decision trees (GradientBoostingClassifier / Regressor).</p>
        <h2><em>Update coming soon...</em></h2>
    `,
    adaboost: `
        <h1>AdaBoost</h1>
        <p>Adaptive Boosting meta-algorithm modifying weights of misclassified data points sequentially.</p>
        <h2><em>Update coming soon...</em></h2>
    `,
    xgboost: `
        <h1>Advanced Boosting Trees</h1>
        <p>XGBoost, LightGBM, and CatBoost high-performance scalable algorithms.</p>
        <h2><em>Update coming soon...</em></h2>
    `,
    kmeans: `
        <h1>Kmean</h1>
        <p>K-Means clustering algorithm determining clusters iteratively by finding centroids.</p>
        <pre><code class="language-python">Kmean(k=3, max_iter=300, ...)</code></pre>
        <div id="dynamic-params"></div>
        <h2>Methods</h2>
        <div class="method-block"><h4>fit(X)</h4><p>Compute k-means clustering.</p></div>
        <div class="method-block"><h4>predict(X)</h4><p>Predict the closest cluster each sample in X belongs to.</p></div>
    `,
    neural_network: `
        <h1>NeuralNetwork</h1>
        <p>A simple multi-layer perceptron (MLP) built purely with numpy arrays, capable of backpropagation.</p>
        <pre><code class="language-python">NeuralNetwork(layers=[2, 64, 1], lr=0.01, ...)</code></pre>
        <div id="dynamic-params"></div>
        <h2>Methods</h2>
        <div class="method-block"><h4>fit(X, y)</h4><p>Train the neural network using backpropagation.</p></div>
        <div class="method-block"><h4>predict(X)</h4><p>Predict using the trained network.</p></div>
        <div class="method-block"><h4>score(X, y)</h4><p>Return the accuracy or R2 score depending on the task.</p></div>
    `
};

const docsData_vi = {
    introduction: `
        <h1>pysimpml</h1>
        <p>Một thư viện học máy đơn giản, thuần NumPy được thiết kế cho mục đích giáo dục, dễ sử dụng và tính minh bạch cao. <strong>pysimpml</strong> cung cấp các triển khai rõ ràng của các thuật toán học máy cổ điển từ đầu, cho phép người dùng theo dõi toán học và logic nội bộ một cách dễ dàng.</p>
        
        <div class="callout">
            <p><strong>Lưu ý:</strong> Thư viện này được xây dựng hoàn toàn dựa trên <code>numpy</code> và không phụ thuộc vào các backend phức tạp.</p>
        </div>

        <h2>Tính năng</h2>
        <ul>
            <li><strong>API đơn giản:</strong> Các phương thức giống như Scikit-learn như <code>fit()</code>, <code>predict()</code>, và <code>score()</code>.</li>
            <li><strong>Tính minh bạch:</strong> Có sẵn các tùy chọn để in ra đạo hàm (gradients), các bước cập nhật nội bộ, tính toán khoảng cách, và phân rã lượt bình chọn trong quá trình huấn luyện để học tập và tìm lỗi.</li>
            <li><strong>Ghi log mở rộng:</strong> Hỗ trợ ghi log liên tục loss huấn luyện, metrics và epochs thẳng ra tệp CSV.</li>
        </ul>

        <h2>Cài đặt</h2>
        <p>Thêm trực tiếp các mô hình từ module <code>pysimpml.models</code> vào dự án của bạn.</p>
        <pre><code class="language-python">from pysimpml.models import LinearRegression, LogisticRegression, DecisionTreeClassification</code></pre>
    `,
    quickstart: `
        <h1>Làm quen nhanh</h1>
        <p>Dưới đây là một ví dụ cơ bản về việc huấn luyện mô hình <strong>Hồi quy tuyến tính (Linear Regression)</strong> bằng <code>pysimpml</code>.</p>
        <pre><code class="language-python">import numpy as np
from pysimpml.models import LinearRegression

# 1. Tạo dữ liệu mẫu
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 5, 4, 5])

# 2. Khởi tạo mô hình log chi tiết
model = LinearRegression(
    lr=0.01, 
    epochs=100, 
    out_loss=True, 
    out_epoch=True
)

# 3. Huấn luyện mô hình
model.fit(X, y)

# 4. Dự đoán và đánh giá
predictions = model.predict([[6]])
score = model.score(X, y)

print("Predictions:", predictions)
print("R2 Score:", score)</code></pre>
    `,
    linear_regression: `
        <h1>Hồi quy tuyến tính (LinearRegression)</h1>
        <p>Một cách triển khai đơn giản của Hồi quy tuyến tính bằng Gradient Descent.</p>
        <pre><code class="language-python">LinearRegression(lr=0.01, epochs=1000, ...)</code></pre>
        <div id="dynamic-params"></div>
        <h2>Phương thức</h2>
        <div class="method-block"><h4>fit(X, y)</h4><p>Huấn luyện mô hình tuyến tính bằng Gradient descent.</p></div>
        <div class="method-block"><h4>predict(X)</h4><p>Dự đoán sử dụng mô hình tuyến tính.</p></div>
        <div class="method-block"><h4>score(X, y)</h4><p>Trả về $R^2$ score cho dự đoán.</p></div>
    `,
    logistic_regression: `
        <h1>Hồi quy Logistic (LogisticRegression)</h1>
        <p>Phân loại Logistic Regression cho các nhiệm vụ phân lớp nhị phân, sử dụng Gradient Descent và hàm kích hoạt sigmoid.</p>
        <pre><code class="language-python">LogisticRegression(lr=0.01, epochs=1000, ...)</code></pre>
        <div id="dynamic-params"></div>
        <h2>Phương thức</h2>
        <div class="method-block"><h4>fit(X, y)</h4><p>Huấn luyện bộ phân loại. Tính toán binary cross entropy loss nội bộ.</p></div>
        <div class="method-block"><h4>predict(X)</h4><p>Dự đoán nhãn lớp cho các mẫu trong X. Ngưỡng (Threshold) = 0.5.</p></div>
        <div class="method-block"><h4>score(X, y)</h4><p>Trả về độ chính xác trung bình (Accuracy).</p></div>
    `,
    ridge_lasso_elastic: `
        <h1>Hồi quy Ridge, Lasso & ElasticNet</h1>
        <p>Các mô hình hồi quy tuyến tính bổ sung hình phạt quy chuẩn L1 (Lasso) và L2 (Ridge) để tránh overfitting.</p>
        <h2><em>Sắp cập nhật...</em></h2>
    `,
    knn: `
        <h1>K-Láng giềng gần (KNN Classification & Regression)</h1>
        <p>Hai mô hình triển khai thuật toán K-Nearest Neighbors để phân loại nhãn (vote) và hồi quy dự báo số nguyên (tính số trung bình).</p>
        <pre><code class="language-python">from pysimpml.models import KNNClassification, KNNRegression

classifier = KNNClassification(k=5, ...)
regressor = KNNRegression(k=5, ...)</code></pre>
        <div id="dynamic-params"></div>
        <h2>Phương thức</h2>
        <div class="method-block"><h4>fit(X, y)</h4><p>Lưu trữ dữ liệu huấn luyện.</p></div>
        <div class="method-block"><h4>predict(X)</h4><p>Dự đoán nhãn hoặc giá trị bằng cách tìm k láng giềng gần nhất.</p></div>
        <div class="method-block"><h4>score(X, y)</h4><p>Trả về điểm đánh giá r2 score hoặc accuracy.</p></div>
    `,
    naive_bayes: `
        <h1>Naive Bayes</h1>
        <p>Bộ phân loại dựa trên lý thuyết xác suất Bayes (bao gồm GaussianNB, MultinomialNB và BernoulliNB).</p>
        <h2><em>Sắp cập nhật...</em></h2>
    `,
    svm: `
        <h1>Máy véctơ hỗ trợ (SVM)</h1>
        <p>Thuật toán phân loại Margin tối đa (SVC) và Margin mềm (SVR) trên các siêu phẳng tọa độ đa chiều.</p>
        <h2><em>Sắp cập nhật...</em></h2>
    `,
    decision_tree: `
        <h1>Cây Quyết định (DecisionTree Classification & Regression)</h1>
        <p>Mô hình cây quyết định xây dựng cấu trúc node nội bộ qua đệ quy để tách cành theo Gini/Entropy (phân lớp) hoặc MSE rẽ nhánh (hồi quy).</p>
        <pre><code class="language-python">from pysimpml.models import DecisionTreeClassification, DecisionTreeRegression

classifier = DecisionTreeClassification(max_depth=None, ...)
regressor = DecisionTreeRegression(max_depth=None, ...)</code></pre>
        <div id="dynamic-params"></div>
        <h2>Phương thức</h2>
        <div class="method-block"><h4>fit(X, y)</h4><p>Xây dựng cây quyết định dựa trên dữ liệu.</p></div>
        <div class="method-block"><h4>predict(X)</h4><p>Dự đoán cho dữ liệu đầu vào X.</p></div>
        <div class="method-block"><h4>score(X, y)</h4><p>Trả về điểm đánh giá r2 score hoặc accuracy.</p></div>
    `,
    random_forest: `
        <h1>Rừng ngẫu nhiên (RandomForest Classification & Regression)</h1>
        <p>Thuật toán học tập kết hợp (ensemble) bằng nhiều cây quyết định giúp tránh Overfitting.</p>
        <pre><code class="language-python">from pysimpml.models import RandomForestClassification, RandomForestRegression

classifier = RandomForestClassification(n_trees=10, ...)
regressor = RandomForestRegression(n_trees=10, ...)</code></pre>
        <div id="dynamic-params"></div>
        <h2>Phương thức</h2>
        <div class="method-block"><h4>fit(X, y)</h4><p>Xây dựng một rừng các cây quyết định ngẫu nhiên.</p></div>
        <div class="method-block"><h4>predict(X)</h4><p>Dự đoán dựa trên tổng hợp (vote hoặc biểu quyết) các cây.</p></div>
        <div class="method-block"><h4>score(X, y)</h4><p>Trả về điểm đánh giá r2 score hoặc accuracy.</p></div>
    `,
    gradient_boosting: `
        <h1>Gradient Boosting</h1>
        <p>Thuật toán học tập Ensemble mạnh mẽ xây dựng tầng lớp cây quyết định sau sửa lỗi cho cây trước (Classifier/Regressor).</p>
        <h2><em>Sắp cập nhật...</em></h2>
    `,
    adaboost: `
        <h1>AdaBoost</h1>
        <p>Thuật toán Adaptive Boosting thích ứng trọng số các điểm dữ liệu bị phân loại sai để hội tụ điểm nhìn.</p>
        <h2><em>Sắp cập nhật...</em></h2>
    `,
    xgboost: `
        <h1>Cây Boosting Tiên tiến</h1>
        <p>Tập hợp các thư viện Gradient Boosting đỉnh cao như XGBoost, LightGBM và CatBoost.</p>
        <h2><em>Sắp cập nhật...</em></h2>
    `,
    kmeans: `
        <h1>Phân cụm K-Means (Kmean)</h1>
        <p>Thuật toán gom cụm K-Means xác định các nhóm bằng cách lặp lại việc tìm các tâm cụm (centroids).</p>
        <pre><code class="language-python">Kmean(k=3, max_iter=300, ...)</code></pre>
        <div id="dynamic-params"></div>
        <h2>Phương thức</h2>
        <div class="method-block"><h4>fit(X)</h4><p>Tính toán phân cụm k-means.</p></div>
        <div class="method-block"><h4>predict(X)</h4><p>Dự đoán cụm gần nhất cho mỗi dữ liệu trong X.</p></div>
    `,
    neural_network: `
        <h1>Mạng nơ ron (NeuralNetwork)</h1>
        <p>Một Multi-layer Perceptron (MLP) đơn giản được xây hoàn toàn bằng Numpy array, hỗ trợ backpropagation.</p>
        <pre><code class="language-python">NeuralNetwork(layers=[2, 64, 1], lr=0.01, ...)</code></pre>
        <div id="dynamic-params"></div>
        <h2>Phương thức</h2>
        <div class="method-block"><h4>fit(X, y)</h4><p>Huấn luyện mạng nơ ron bằng thuật toán lan truyền ngược.</p></div>
        <div class="method-block"><h4>predict(X)</h4><p>Dự đoán với mạng đã huấn luyện.</p></div>
        <div class="method-block"><h4>score(X, y)</h4><p>Trả về điểm đánh giá r2 score hoặc accuracy.</p></div>
    `
};

const allDocs = {
    en: docsData_en,
    vi: docsData_vi
};

let currentLang = 'en';
let currentTarget = 'introduction';

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const navItems = document.querySelectorAll('.nav-item');
    const themeToggle = document.getElementById('theme-toggle');
    const langSelect = document.getElementById('lang-select');
    const sidebar = document.getElementById('sidebar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    function renderContent() {
        // Clear content perfectly
        mainContent.innerHTML = '';

        let htmlStr = '';
        if (allDocs[currentLang] && allDocs[currentLang][currentTarget]) {
            htmlStr = allDocs[currentLang][currentTarget];
        }

        mainContent.innerHTML = htmlStr;

        // Render dynamic parameter tables if applicable
        const paramsDiv = document.getElementById('dynamic-params');
        if (paramsDiv) {
            let tablesHtml = '';

            // Render Model Specific Params
            const mappingData = modelParams[currentTarget];
            if (mappingData) {
                tablesHtml += renderTable(mappingData, "Configuration Parameters");
            }
            // Render Standard Debug Params globally for all Models
            let stdTitle = currentLang === 'vi' ? 'Standard Debug Parameters ( Sắp cập nhật )' : 'Standard Debug Parameters ( Update coming soon )';
            tablesHtml += renderTable(standardDebug, stdTitle);

            paramsDiv.innerHTML = tablesHtml;
        }

        // Apply visual active status
        navItems.forEach(nav => {
            if (nav.getAttribute('data-target') === currentTarget) {
                nav.classList.add('active');
            } else {
                nav.classList.remove('active');
            }
        });

        // Update UI Labels accurately
        const uiMap = uiLabels[currentLang];
        if (uiMap) {
            for (const [key, val] of Object.entries(uiMap)) {
                const el = document.getElementById(key);
                if (el) el.innerText = val;
            }
        }

        window.scrollTo(0, 0);
    }

    renderContent();

    langSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        renderContent();
    });

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            currentTarget = item.getAttribute('data-target');
            renderContent();

            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }
        });
    });

    const storedTheme = localStorage.getItem('theme') || 'light';
    if (storedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && e.target !== mobileMenuBtn) {
                sidebar.classList.remove('open');
            }
        }
    });

    // Mouse trailing particles effect
    document.addEventListener('mousemove', function(e) {
        // Throttle particle creation slightly
        if (Math.random() > 0.4) return;
        
        const particle = document.createElement('div');
        particle.className = 'mouse-particle';
        
        // Random vivid color
        const colors = ['#FF3366', '#FF9933', '#FFCC00', '#33CC99', '#3399FF', '#9933FF', '#FF66B2'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Follow Cursor Position
        particle.style.left = e.pageX + 'px';
        particle.style.top = e.pageY + 'px';
        
        // Randomize size
        const size = Math.random() * 6 + 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        document.body.appendChild(particle);
        
        // Random spread target for CSS animation
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 40 + 10;
        particle.style.setProperty('--tx', (Math.cos(angle) * radius) + 'px');
        particle.style.setProperty('--ty', (Math.sin(angle) * radius) + 'px');
        
        // Cleanup after animation finishes (1s)
        setTimeout(() => particle.remove(), 1000);
    });
});
